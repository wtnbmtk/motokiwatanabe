<script lang="ts">
  import { onMount } from "svelte";
  import { elasticOut } from "svelte/easing";

  let x1 = 20; // 固定始点
  let y1 = 0; // 固定始点
  let x2 = $state(20); // 終点の初期位置は始点の下
  let y2 = $state(80); // 終点の初期位置
  const initialY2 = 80; // y2の初期位置を保存
  const maxOffsetX = 10; // x軸の許容範囲
  let isDragging = false;
  let animationFrame = 0;
  const maxDistance = 100; // 始点と終点の最大距離
  let endCircleRadius = 8; // 終点のクリック可能な領域の半径
  let bulbArea1 = $state<string>();
  let moveThreshold = 85;

  function handleMove(event: MouseEvent | TouchEvent) {
    if (!isDragging) {
      return;
    }

    const touch = event instanceof TouchEvent ? event.touches[0] : null;
    const clientX = touch ? touch.clientX : (event as MouseEvent).clientX;
    const clientY = touch ? touch.clientY : (event as MouseEvent).clientY;

    const svg = document.getElementById("string") as SVGSVGElement | null;
    if (!svg) {
      return;
    }

    const point = svg.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const cursorPoint = point.matrixTransform(svg.getScreenCTM()!.inverse());

    // Y軸のみの追従
    y2 = cursorPoint.y;

    // x2をx1の±maxXOffset以内に制限
    x2 = Math.min(Math.max(cursorPoint.x, x1 - maxOffsetX), x1 + maxOffsetX);

    // 始点から終点までの距離を制限
    const distance = Math.abs(y2 - y1);
    if (distance > maxDistance) {
      y2 = y1 + maxDistance * Math.sign(y2 - y1);
    }

    // y2が初期位置より上に行かないように制限
    if (y2 < initialY2) {
      y2 = initialY2;
    }
  }

  function handleStart(event: MouseEvent | TouchEvent) {
    const touch = event instanceof TouchEvent ? event.touches[0] : null;
    const clientX = touch ? touch.clientX : (event as MouseEvent).clientX;
    const clientY = touch ? touch.clientY : (event as MouseEvent).clientY;

    const svg = document.getElementById("string") as SVGSVGElement | null;
    if (!svg) {
      return;
    }

    const point = svg.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const cursorPoint = point.matrixTransform(svg.getScreenCTM()!.inverse());

    const distanceToEnd = Math.hypot(cursorPoint.x - x2, cursorPoint.y - y2);
    if (distanceToEnd <= endCircleRadius) {
      isDragging = true;
      cancelAnimationFrame(animationFrame); // ドラッグ開始時にアニメーションを止める
    }
  }

  function handleEnd() {
    if (isDragging) {
      isDragging = false;

      // ドラッグ操作が moveThreshold を超えていた場合のみ色を切り替える
      if (y2 > moveThreshold) {
        const currentTheme = document.body.classList.contains("theme-light")
          ? "theme-light"
          : "theme-dark";

        if (currentTheme === "theme-light") {
          bulbArea1 = "yellow";
          applyThemeClass("theme-dark");
        } else {
          bulbArea1 = "white";
          applyThemeClass("theme-light");
        }

        saveThemeToLocalStorage(
          document.body.classList.contains("theme-light")
            ? "theme-light"
            : "theme-dark"
        );
      }

      animateEndPoint(); // ドラッグ終了時に始点の直下に戻るアニメーションを開始
    }
  }

  function applyThemeClass(theme: string) {
    // 既存のテーマクラスを削除
    document.body.classList.remove("theme-dark", "theme-light");
    // 新しいテーマクラスを追加
    document.body.classList.add(theme);

    // カスタムイベントを発火して新しい要素にも適用
    const event = new Event("themeChanged");
    document.body.dispatchEvent(event);
  }

  function saveThemeToLocalStorage(theme: string) {
    localStorage.setItem("colors", JSON.stringify({ theme }));
  }

  function observeNewElements() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          // 新しいノードが追加されたときにテーマを適用
          document.body.dispatchEvent(new Event("themeChanged"));
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function animateEndPoint() {
    const startX = x2;
    const startY = y2;
    const endX = x1;
    const endY = y1 + 80; // 始点の直下に戻る
    const duration = 3000; // アニメーションの持続時間 (ミリ秒)
    const startTime = performance.now();

    function animate(time: number) {
      const elapsed = time - startTime;
      let progress = Math.min(elapsed / duration, 1);

      // 'elasticOut'を使って滑らかな終了を実現
      const easingProgress = elasticOut(progress);

      // X軸の波打つ効果を控えめに
      x2 =
        startX +
        (endX - startX) * easingProgress +
        10 * Math.sin(progress * 5 * Math.PI);
      // Y軸は直線的に戻る
      y2 = startY + (endY - startY) * easingProgress;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    // ページ読み込み時に色の状態を復元
    const savedColors = localStorage.getItem("colors");
    if (savedColors) {
      const { theme } = JSON.parse(savedColors);
      // 保存されたテーマクラスを適用
      applyThemeClass(theme);
    } else {
      // 初期テーマクラスを適用して保存
      const initialTheme = "theme-dark";
      applyThemeClass(initialTheme);
      saveThemeToLocalStorage(initialTheme);
    }

    // 要素の追加を監視して、後から追加された要素にも適用
    observeNewElements();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    window.addEventListener("mousedown", handleStart);
    window.addEventListener("touchstart", handleStart);

    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);

      window.removeEventListener("mousedown", handleStart);
      window.removeEventListener("touchstart", handleStart);

      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  });
</script>

<div class="lighting">
  <svg id="bulb">
    <defs>
      <!-- 電球アイコン -->
      <symbol id="bulb-icon" viewBox="0 0 10.666016 16.000001">
        <path
          fill={bulbArea1}
          d="M 5.3339844,0 C 2.393454,0 0,2.103589 0,4.6894531 0,6.0574518 0.89815921,7.4670597 1.765625,8.828125 2.513091,9.99959 3.2262856,11.117712 3.4492188,12.267578 H 7.2167969 C 7.4402634,11.117445 8.1531914,9.999324 8.9003906,8.828125 9.7683898,7.4670597 10.666016,6.0574518 10.666016,4.6894531 10.666016,2.103589 8.2745148,0 5.3339844,0 Z"
        />
        <path
          fill="lightgrey"
          d="M 4.7366019,12.267578 H 4.9065238 A 210.06987,210.06987 0 0 0 4.4006644,9.966797 L 4.2092582,9.1210935 C 4.1743249,8.9786936 4.1444019,8.8335465 4.1116019,8.6855466 4.333735,8.6364801 4.8190587,8.4700617 5.3342582,7.9140622 5.8494577,8.4700617 6.335048,8.6364801 6.5569144,8.6855466 6.5235815,8.8335465 6.492238,8.9786936 6.457305,9.1210935 6.3917051,9.4122932 6.328032,9.6942636 6.2658988,9.966797 a 192.83253,192.83253 0 0 0 -0.5058594,2.300781 h 0.171875 a 213.84213,213.84213 0 0 0 0.5625,-2.255859 C 6.5600144,9.7394521 6.630779,9.4566818 6.7014457,9.1660154 6.7409126,9.0113488 6.7741072,8.8520257 6.8127738,8.6933591 7.0143736,8.6797591 7.2072958,8.6163822 7.3576957,8.4785154 7.5118289,8.3267822 7.5929144,8.1297017 7.5569144,7.9179685 7.5406478,7.8166353 7.4652997,7.6854247 7.3186332,7.6406248 A 0.37253333,0.37253333 0 0 0 7.0959769,7.6347654 0.4192,0.4192 0 0 0 6.9358207,7.7402341 C 6.7936874,7.898104 6.7420008,8.0566238 6.6838676,8.2128904 c -0.0272,0.078666 -0.048979,0.1567751 -0.070313,0.234375 0,0 -0.2261379,0.017539 -0.7109374,-0.3085938 C 5.6332844,7.9576051 5.5549695,7.8269007 5.4768363,7.7402341 c 0.084267,-0.0936 0.1658491,-0.1977323 0.2285156,-0.3222656 0.033333,-0.0696 0.060713,-0.1437157 0.070312,-0.2285156 0.0096,-0.0848 -0.00615,-0.1810053 -0.054687,-0.2636719 A 0.4664,0.4664 0 0 0 5.4905082,6.722656 C 5.4419752,6.705323 5.3883915,6.697265 5.3342582,6.697265 c -0.054133,0 -0.1102032,0.00779 -0.1582032,0.025391 A 0.4688,0.4688 0 0 0 4.9455863,6.925781 c -0.048533,0.082933 -0.06402,0.178872 -0.054687,0.2636719 a 0.72,0.72 0 0 0 0.072266,0.2285156 c 0.0624,0.1245333 0.1420292,0.2289324 0.2265625,0.3222656 C 5.1115936,7.8269007 5.0332787,7.9576051 4.7639457,8.1386716 4.2791462,8.4650713 4.0530082,8.4472654 4.0530082,8.4472654 A 3.7741333,3.7741333 0 0 0 3.9826957,8.2128904 C 3.9237624,8.0566238 3.8728757,7.8981007 3.7307426,7.7402341 A 0.41733333,0.41733333 0 0 0 3.5705863,7.6347654 0.37253333,0.37253333 0 0 0 3.3498832,7.6406248 c -0.1474666,0.0448 -0.2242344,0.1760105 -0.2402344,0.2773437 -0.036533,0.2117332 0.045086,0.4088137 0.1992188,0.5605469 0.1509332,0.1378665 0.343322,0.2012437 0.5449218,0.2148437 0.038133,0.1589332 0.073015,0.3179897 0.1132813,0.4726563 l 0.2050781,0.8457036 a 222.42693,222.42693 0 0 0 0.5644531,2.255859 z M 5.3342582,6.9238279 c 0.059467,0 0.1158896,0.037649 0.1601562,0.1035156 0.052,0.082933 0.035309,0.1942876 -0.015625,0.3046875 -0.0376,0.077867 -0.089331,0.1528761 -0.1445312,0.2246094 A 1.2426667,1.2426667 0 0 1 5.1897269,7.332031 C 5.1387937,7.2218978 5.1198823,7.1102767 5.1721488,7.0273435 5.2158822,6.9614769 5.2747915,6.9238279 5.3342582,6.9238279 Z M 3.4670707,7.8574216 c 0.00857,-1.337e-4 0.013672,5.35e-4 0.013672,0 0.0104,0.00613 0.033001,0.015862 0.052734,0.039063 0.088,0.091733 0.1524584,0.2442324 0.203125,0.3847657 0.018667,0.0536 0.035314,0.1093958 0.050781,0.1640624 -0.1114661,-0.0208 -0.2188423,-0.067213 -0.2871089,-0.1328129 -0.0984,-0.092 -0.1521928,-0.2374294 -0.1308594,-0.3515626 0.010933,-0.0592 0.040446,-0.090189 0.070312,-0.097656 0.0084,-0.004 0.018777,-0.00573 0.027344,-0.00586 z m 3.71875,0 c 0,0.00107 0.026435,-0.00241 0.042969,0.00586 0.0296,0.00747 0.057426,0.038722 0.068359,0.097656 0.021333,0.1141293 -0.032993,0.2615158 -0.1308594,0.3535157 -0.0688,0.065333 -0.1756428,0.1100594 -0.2871094,0.1308593 0.015733,-0.054667 0.032114,-0.1107291 0.050781,-0.1640624 0.0504,-0.1405332 0.1156584,-0.2932991 0.203125,-0.3847657 0.0208,-0.023467 0.0418,-0.032929 0.052735,-0.039063 z"
        />
        <path
          fill="lightgrey"
          d="M 3.872,12.681867 H 3.6053333 v 0.96 h 0.2048 v 0.8536 h 0.2048 v 0.8536 H 4.3578667 C 4.5192,15.730133 4.8925333,16 5.3333333,16 5.7738667,16 6.1469333,15.730133 6.3088,15.348533 H 6.6626667 V 14.4896 l 0.029867,-0.01093 0.1746667,-0.064 V 13.6352 l 0.017333,-0.0056 0.1869334,-0.05867 V 12.6816 H 3.872 Z"
        />
      </symbol>
    </defs>
    <use href="#bulb-icon" y="0.2" class="bulb" />
  </svg>
  <svg
    id="string"
    role="img"
    aria-label="Interactive SVG with dangling rope effect"
  >
    <path
      stroke-width="2"
      d={`M${x1},${y1} Q${x1},${(y1 + y2) / 2} ${x2},${y2}`}
      fill="none"
      stroke="#0088cc"
    />
    <circle
      class="end_circle"
      cx={x2}
      cy={y2}
      r={endCircleRadius}
      pointer-events="all"
      fill="#0088cc"
    />
  </svg>
</div>

<style>
  :global(body) {
    background-color: black;
    color: white;
  }
  :global(a) {
    color: white;
  }
  :global(.h2 span) {
    background-color: white;
  }
  :global(.skills > div) {
    border: solid 1px white;
  }
  :global(.skills > div p) {
    background-color: black;
    border: solid 1px white;
  }
  :global(.exprerience ul li:before) {
    background-color: white;
  }
  :global(button) {
    background-color: transparent;
    color: white;
    border-color: white;
  }
  :global(.dropdown button) {
    background-color: black;
    border: solid 1px white;
    color: white;
  }
  :global(.dropdown nav) {
    background-color: black;
    border: solid 1px white;
  }
  :global(#bulb-icon > path:nth-child(1)) {
    fill: white;
  }
  :global(#logo) {
    fill: white;
  }
  :global(.all svg) {
    stroke: white;
  }
  :global(#search-icon) {
    stroke: white;
  }
  :global(.icons) {
    stroke: white;
    fill: white;
  }
  :global(.cursor) {
    background-color: white;
  }
  /* ----------------------------------- */
  :global(.theme-dark) {
    background-color: black;
    color: white;
  }
  :global(.theme-light) {
    background-color: white;
    color: black;
  }
  :global(.theme-dark a) {
    color: white;
  }
  :global(.theme-light a) {
    color: black;
  }
  :global(.theme-dark .h2 span) {
    background-color: white;
  }
  :global(.theme-light .h2 span) {
    background-color: black;
  }
  :global(.theme-dark .skills > div) {
    border: solid 1px white;
  }
  :global(.theme-light .skills > div) {
    border: solid 1px black;
  }
  :global(.theme-dark .skills > div p) {
    background-color: black;
    border: solid 1px white;
  }
  :global(.theme-light .skills > div p) {
    background-color: white;
    border: solid 1px black;
  }
  :global(.theme-dark .exprerience ul li:before) {
    background-color: white;
  }
  :global(.theme-light .exprerience ul li:before) {
    background-color: black;
  }
  :global(.theme-dark button) {
    background-color: transparent;
    color: white;
    border-color: white;
  }
  :global(.theme-light button) {
    background-color: transparent;
    color: black;
    border-color: black;
  }
  :global(.theme-dark .dropdown button) {
    background-color: black;
    border: solid 1px white;
    color: white;
  }
  :global(.theme-light .dropdown button) {
    background-color: white;
    border: solid 1px black;
    color: black;
  }
  :global(.theme-dark .dropdown nav) {
    background-color: black;
    border: solid 1px white;
  }
  :global(.theme-light .dropdown nav) {
    background-color: white;
    border: solid 1px black;
  }
  :global(.theme-dark #bulb-icon > path:nth-child(1)) {
    fill: white;
  }
  :global(.theme-light #bulb-icon > path:nth-child(1)) {
    fill: yellow;
  }
  :global(.theme-dark #logo) {
    fill: white;
  }
  :global(.theme-light #logo) {
    fill: black;
  }
  :global(.theme-dark .all svg) {
    stroke: white;
  }
  :global(.theme-light .all svg) {
    stroke: black;
  }
  :global(.theme-dark #search-icon) {
    stroke: white;
  }
  :global(.theme-light #search-icon) {
    stroke: black;
  }
  :global(.theme-dark .icons) {
    fill: white;
    stroke: white;
  }
  :global(.theme-light .icons) {
    fill: black;
    stroke: black;
  }
  :global(.theme-dark .cursor) {
    background-color: white;
  }
  :global(.theme-light .cursor) {
    background-color: black;
  }
  :global(.theme-dark .article h2, .theme-dark .article h3) {
    border-left: solid 4px #fff;
  }
  :global(.theme-light .article h2, .theme-light .article h3) {
    border-left: solid 4px #000;
  }
  :global(.theme-dark blockquote) {
    border: solid 2px #fff;
  }
  :global(.theme-light blockquote) {
    border: solid 2px #000;
  }
  :global(.theme-dark blockquote :before, .theme-dark blockquote :after) {
    background: #fff;
    color: #000;
  }
  :global(.theme-light blockquote :before, .theme-light blockquote :after) {
    background: #000;
    color: #fff;
  }
  :global(.theme-dark .axis-level) {
    fill: #fff;
  }
  :global(.theme-light .axis-level) {
    fill: #000;
  }
  :global(.theme-dark text) {
    fill: #fff;
  }
  :global(.theme-light text) {
    fill: #000;
  }
  .lighting {
    margin: 40px auto 20px;
    width: fit-content;
    height: fit-content;
    z-index: 3;
  }
  #bulb {
    height: 40px;
    width: 40px;
    margin: auto;
    z-index: 4;
  }
  #string {
    height: 110px;
    width: 40px;
    touch-action: none; /* タッチスクロールを無効化 */
  }
  .end_circle {
    cursor: pointer;
    pointer-events: all;
  }
</style>
