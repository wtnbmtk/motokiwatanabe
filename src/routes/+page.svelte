<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="contain">
  <div class="inner introduction">
    <div>
      <enhanced:img class="enhanced" src="$lib/img/profile.jpg" alt="" />
      <div>
        <p class="small">プログラマー</p>
        <p class="name">渡辺 元己</p>
      </div>
    </div>
    <div>
      <p>
        東京工芸大学卒。同大学在学中からプログラミングスキル、デザインスキルを身に着けてきました。プログラミングは特にWebのフロントエンド領域を得意としていて、コーディングによる様々なデザイン手法に関心があります。その為、フロントエンドのライブラリやフレームワークの扱いに幅広い経験があります。バックエンドにも注力していて、ブログサイトの開発を通じてデータのやり取りの手法について学んでいます。Webプログラミング以外ではVBAを用いた業務効率化ツールの開発や、Pythonを用いたOCRツールの開発経験があります。
      </p>
      <nav>
        <a href="https://mtkwtnb.jp/" target="_blank"
          ><svg class="icons" stroke-width="1.5" stroke="currentColor">
            <use href="#blog" />
          </svg>
          Blog
        </a>
        <a href="https://github.com/wtnbmtk" target="_blank"
          ><svg class="icons">
            <use href="#github" />
          </svg>
          Github
        </a>
      </nav>
    </div>
  </div>
  <div class="h2">
    <h2>スキル</h2>
    <span />
    <div class="circle" />
  </div>
  <div class="inner skills">
    <div>
      <p>Languages</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>Python</li>
        <li>VBA</li>
      </ul>
    </div>
    <div>
      <p>Frameworks & Libraries</p>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Svelte</li>
        <li>Astro</li>
        <li>Gatsby</li>
      </ul>
    </div>
    <div>
      <p>Development Tools</p>
      <ul>
        <li>VSCode</li>
        <li>Git</li>
        <li>Jupyter Notebook</li>
        <li>Figma</li>
      </ul>
    </div>
  </div>
  <div class="h2">
    <h2>実績</h2>
    <span />
  </div>
  <div class="inner exprerience">
    <div class="progress">
      <p>past</p>
      <p>now</p>
    </div>
    <ul class="work">
      <li>研究室でWebヒューマンインタフェースを研究する</li>
      <li>独学でWordPressサイトを構築してブログサイトの運用を行う</li>
      <li>知人が立ち上げたウェブマガジンの実装をおこなう</li>
      <li>身内が運営する賃貸物件の紹介サイトを制作</li>
      <li>EC機能を付与したWebサイト制作サービスを立ち上げる</li>
      <li>自身のホームページを立ち上げる</li>
      <li>News APIを用いたニュースデータ収集サイトを制作</li>
      <li>
        JSONBin.ioを用いたデータの取得、編集が可能なWebアプリケーションを制作
      </li>
    </ul>
  </div>
  <div class="h2">
    <h2>ポートフォリオ</h2>
    <span />
  </div>
  <div class="inner">
    <ArticleCard articles={data.articles} />
    <a class="all" href="/articles/latest/1"
      >Lead More <svg>
        <use href="#arrow" />
      </svg></a
    >
  </div>
</div>

<symbol viewBox="0 0 24 24" id="github">
  <path
    stroke="none"
    d="M 6.315,6.176 C 6.065,5.538 6.075,4.809 6.186,4.142 a 6.77,6.77 0 0 1 2.12,1.07 c 0.28,0.214 0.647,0.283 0.989,0.18 A 9.343,9.343 0 0 1 12,5 c 0.961,0 1.874,0.14 2.703,0.391 0.342,0.104 0.709,0.034 0.988,-0.18 A 6.77,6.77 0 0 1 17.81,4.141 C 17.921,4.808 17.93,5.537 17.682,6.174 17.532,6.558 17.607,7 17.89,7.314 18.614,8.117 19,9.04 19,10 c 0,2.114 -1.97,4.187 -5.134,4.818 -0.792,0.158 -1.101,1.155 -0.495,1.726 C 13.76,16.91 14,17.426 14,18 v 3 a 1,1 0 0 0 2,0 V 18 C 16,17.43 15.88,16.888 15.666,16.397 18.683,15.35 21,12.993 21,10 21,8.653 20.516,7.415 19.713,6.378 19.923,5.558 19.904,4.732 19.824,4.098 19.753,3.53 19.654,2.786 19.254,2.342 18.659,1.683 17.674,2.071 16.974,2.31 A 9.081,9.081 0 0 0 14.849,3.355 11.432,11.432 0 0 0 12,3 C 11.006,3 10.047,3.125 9.149,3.356 A 9.08,9.08 0 0 0 7.024,2.311 C 6.324,2.071 5.338,1.683 4.743,2.342 4.335,2.794 4.25,3.479 4.177,4.061 L 4.172,4.099 C 4.092,4.734 4.074,5.561 4.284,6.382 3.484,7.418 3,8.654 3,10 c 0,2.992 2.317,5.35 5.334,6.397 A 3.986,3.986 0 0 0 8,17.98 L 7.832,18.014 C 7.115,18.113 6.656,18.024 6.344,17.892 5.584,17.57 5.192,16.759 4.714,16.139 4.416,15.754 3.982,15.273 3.316,15.051 a 1.0002285,1.0002285 0 0 0 -0.632,1.898 c 0.558,0.186 0.944,1.142 1.298,1.566 0.373,0.448 0.869,0.916 1.58,1.218 0.682,0.29 1.483,0.393 2.438,0.276 V 21 a 1,1 0 0 0 2,0 v -3 c 0,-0.574 0.24,-1.09 0.629,-1.456 0.607,-0.572 0.297,-1.568 -0.495,-1.726 C 6.969,14.187 5,12.114 5,10 5,9.042 5.385,8.119 6.108,7.316 6.391,7.002 6.465,6.56 6.315,6.176 Z"
  />
</symbol>
<symbol id="instagram" viewBox="0 0 24 24"
  ><path
    stroke="none"
    d="M12 7.9a4.1 4.1 0 1 0 4.1 4.1A4.09 4.09 0 0 0 12 7.9m0 6.77A2.67 2.67 0 1 1 14.67 12A2.67 2.67 0 0 1 12 14.67m5.23-6.94a1 1 0 1 1-1-1a1 1 0 0 1 1 1m2.71 1a4.7 4.7 0 0 0-1.29-3.35a4.7 4.7 0 0 0-3.35-1.32C14 4 10 4 8.7 4.06a4.73 4.73 0 0 0-3.35 1.29A4.7 4.7 0 0 0 4.06 8.7C4 10 4 14 4.06 15.3a4.7 4.7 0 0 0 1.29 3.35a4.73 4.73 0 0 0 3.35 1.29c1.32.08 5.28.08 6.6 0a4.7 4.7 0 0 0 3.35-1.29a4.7 4.7 0 0 0 1.29-3.35c.06-1.3.06-5.3 0-6.6Zm-1.7 8a2.7 2.7 0 0 1-1.52 1.52a18 18 0 0 1-4.72.32a18 18 0 0 1-4.71-.32a2.7 2.7 0 0 1-1.52-1.52c-.42-1.06-.33-3.56-.33-4.72s-.09-3.67.33-4.72a2.65 2.65 0 0 1 1.52-1.53A18 18 0 0 1 12 5.44a18 18 0 0 1 4.72.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.06.32 3.56.32 4.72s.1 3.67-.32 4.72Z"
  /></symbol
>
<symbol id="arrow" viewBox="0 0 24 24">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
  />
</symbol>
<symbol id="blog" viewBox="0 0 24 24">
  <path
    fill="none"
    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  />
</symbol>

<style>
  .introduction > div:nth-of-type(1) {
    display: grid;
    place-content: center;
    grid-auto-flow: column;
    place-content: baseline;
    place-items: center;
    gap: 1rem;
  }
  p.small {
    margin: 0;
    font-size: small;
  }
  p.name {
    margin: 0 0 auto 0;
  }
  nav a {
    position: relative;
    padding: 0 4px;
    border-radius: 12px;
  }
  nav a:hover {
    color: black;
    transition: all 0.7s;
    text-decoration: none;
  }
  nav a:nth-child(1):hover {
    background: #d0021b;
  }
  nav a:nth-child(2):hover {
    background: #1f883d;
  }
  nav a:nth-child(3):hover::before {
    opacity: 1;
  }
  nav a:nth-child(3)::before {
    position: absolute;
    content: "";
    inset: 0; /* same as { top: 0; right: 0; bottom: 0; left: 0; } */
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    z-index: -1;
    opacity: 0;
    transition: all 0.7s;
    border-radius: 12px;
  }
  nav a:hover .icons {
    fill: black;
    stroke: black;
    transition: all 0.7s;
  }
  .enhanced {
    width: 60px;
    height: auto;
    margin: auto;
    border-radius: 50%;
  }
  .inner {
    margin: 1rem auto 0;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 4rem;
  }
  .skills > div {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: fit-content;
    margin: auto;
    border-radius: 8px;
  }
  .skills > div p {
    position: absolute;
    width: fit-content;
    margin: auto;
    display: block;
    border-radius: 15px;
    text-align: center;
    inset: -12px 0 auto;
    padding: 0 16px 3px;
    font-size: 0.8rem;
  }
  .skills > div ul {
    margin: 15px auto 0;
    list-style: none;
    padding: 8px;
    width: fit-content;
  }
  .circle {
    position: absolute;
    right: 30px;
    top: 60px;
  }
  .circle::before,
  .circle::after {
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }
  .circle::before {
    top: 0px;
    background: rgb(159 51 123 / 80%);
    filter: blur(2px);
    z-index: 1;
    animation-duration: 4s;
  }
  .circle::after {
    top: 15px;
    background: #b81220;
    animation-duration: 5s;
  }
  @keyframes float {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  .exprerience {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    width: fit-content;
    margin: auto;
  }
  .progress {
    display: grid;
    background: linear-gradient(0deg, white, black);
    border-radius: 17px;
    width: fit-content;
    padding: 6px 6px 6px 0;
    font-size: 1rem;
  }
  .progress p {
    position: relative;
    writing-mode: vertical-rl;
    text-orientation: sideways-left;
    transform: scale(-1, -1);
    margin: 0;
  }
  .progress p:nth-child(1) {
    position: absolute;
    color: white;
  }
  .progress p:nth-child(2) {
    color: black;
  }
  .exprerience ul {
    list-style: none;
    padding: 0;
  }
  .exprerience ul li {
    position: relative;
    padding-left: 32px;
    margin: 1rem 0;
  }
  .exprerience ul li:before {
    position: absolute;
    inset: 0 auto 0 0;
    margin: auto;
    content: "";
    display: block;
    width: 16px;
    height: 1px;
  }
  .all {
    display: flex;
    place-items: center;
    gap: 4px;
    justify-content: center;
    width: fit-content;
    margin: 16px auto 0;
  }
  .all svg {
    stroke-width: 1.5;
    width: 20px;
    height: 20px;
    vertical-align: sub;
  }
  @media (width >= 600px) {
  }
  @media (width >= 800px) {
    .introduction {
      grid-template-columns: repeat(2, auto);
    }
    .skills {
      grid-template-columns: repeat(3, auto);
      gap: 0;
    }
    .skills > div {
      width: 200px;
      margin: 0 auto;
    }
  }
</style>
