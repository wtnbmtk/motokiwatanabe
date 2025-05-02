<script lang="ts">
  import AxisRadial from "$lib/components/AxisRadial.svelte";
  import Radar from "$lib/components/Radar.svelte";
  import { LayerCake, Svg } from "layercake";
  import type { PageData } from "./$types.ts";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();

  // 表示ラベルを定義
  const tags = data.chart?.tags?.map((t) => t.slug) ?? [];

  const labelMap = {
    score1: tags[0] || "Tag 1",
    score2: tags[1] || "Tag 2",
    score3: tags[2] || "Tag 3",
    score4: tags[3] || "Tag 4",
    score5: tags[4] || "Tag 5",
  };

  const scores = data.chart?.score?.map((s) => s.number) ?? [];
  // データを変換し、ラベル名とスコアを対応付ける
  const chartData = [
    {
      [labelMap.score1]: scores[0] ?? null,
      [labelMap.score2]: scores[1] ?? null,
      [labelMap.score3]: scores[2] ?? null,
      [labelMap.score4]: scores[3] ?? null,
      [labelMap.score5]: scores[4] ?? null,
    },
  ];

  // xKey はラベル名を使用
  const xKey = Object.values(labelMap);
</script>

<svelte:head>
  <title>Motoki Watanabe's Portfolio</title>
  <meta name="description" content="Top Page." />
</svelte:head>

<div class="contain">
  <h1>ABOUT</h1>
  <div class="h2">
    <h2>Biography</h2>
    <span></span>
  </div>
  <div class="inner introduction">
    <div>
      <div class="picture">
        <enhanced:img class="profile" src="$lib/img/profile.jpg" alt="" />
      </div>
      <div class="chart-container">
        <p class="radar_title">Skills & Interests Radar</p>
        <LayerCake
          padding={{ top: 30, right: 30, bottom: 30, left: 30 }}
          x={xKey}
          xDomain={[0, 10]}
          xRange={({ height }: { height: number }) => [0, height / 2]}
          data={chartData}
        >
          <Svg>
            <AxisRadial />
            <Radar />
          </Svg>
        </LayerCake>
      </div>
    </div>
    <div>
      <p class="small">programmer</p>
      <p class="name">渡辺 元己</p>
      <div>
        {@html data.author?.biography}
      </div>
      <nav>
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
    <h2>Development Skills</h2>
    <span></span>
    <div class="circle"></div>
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
    <h2>Development Exprerience</h2>
    <span></span>
  </div>
  <div class="inner exprerience">
    <div class="progress">
      <p>latest</p>
      <p>past</p>
    </div>
    <ul class="works">
      {#each data.articles as article}
        <li>
          <a href={`/article/${article.slug}`}
            >{article.title}<svg class="icons links"><use href="#link" /></svg
            ></a
          >
        </li>
      {/each}
      <li>WordPressサイトを構築してブログサイトの運用を行う</li>
    </ul>
  </div>
</div>

<svg class="symbol">
  <symbol id="blog" viewBox="0 0 24 24">
    <path
      fill="none"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </symbol>
  <symbol viewBox="0 0 24 24" id="github">
    <path
      stroke="none"
      d="M 6.315,6.176 C 6.065,5.538 6.075,4.809 6.186,4.142 a 6.77,6.77 0 0 1 2.12,1.07 c 0.28,0.214 0.647,0.283 0.989,0.18 A 9.343,9.343 0 0 1 12,5 c 0.961,0 1.874,0.14 2.703,0.391 0.342,0.104 0.709,0.034 0.988,-0.18 A 6.77,6.77 0 0 1 17.81,4.141 C 17.921,4.808 17.93,5.537 17.682,6.174 17.532,6.558 17.607,7 17.89,7.314 18.614,8.117 19,9.04 19,10 c 0,2.114 -1.97,4.187 -5.134,4.818 -0.792,0.158 -1.101,1.155 -0.495,1.726 C 13.76,16.91 14,17.426 14,18 v 3 a 1,1 0 0 0 2,0 V 18 C 16,17.43 15.88,16.888 15.666,16.397 18.683,15.35 21,12.993 21,10 21,8.653 20.516,7.415 19.713,6.378 19.923,5.558 19.904,4.732 19.824,4.098 19.753,3.53 19.654,2.786 19.254,2.342 18.659,1.683 17.674,2.071 16.974,2.31 A 9.081,9.081 0 0 0 14.849,3.355 11.432,11.432 0 0 0 12,3 C 11.006,3 10.047,3.125 9.149,3.356 A 9.08,9.08 0 0 0 7.024,2.311 C 6.324,2.071 5.338,1.683 4.743,2.342 4.335,2.794 4.25,3.479 4.177,4.061 L 4.172,4.099 C 4.092,4.734 4.074,5.561 4.284,6.382 3.484,7.418 3,8.654 3,10 c 0,2.992 2.317,5.35 5.334,6.397 A 3.986,3.986 0 0 0 8,17.98 L 7.832,18.014 C 7.115,18.113 6.656,18.024 6.344,17.892 5.584,17.57 5.192,16.759 4.714,16.139 4.416,15.754 3.982,15.273 3.316,15.051 a 1.0002285,1.0002285 0 0 0 -0.632,1.898 c 0.558,0.186 0.944,1.142 1.298,1.566 0.373,0.448 0.869,0.916 1.58,1.218 0.682,0.29 1.483,0.393 2.438,0.276 V 21 a 1,1 0 0 0 2,0 v -3 c 0,-0.574 0.24,-1.09 0.629,-1.456 0.607,-0.572 0.297,-1.568 -0.495,-1.726 C 6.969,14.187 5,12.114 5,10 5,9.042 5.385,8.119 6.108,7.316 6.391,7.002 6.465,6.56 6.315,6.176 Z"
    />
  </symbol>
  <symbol id="link" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke-width="1.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
    />
  </symbol><use href="#link" />
</svg>

<style>
  .introduction > div:first-child {
    display: grid;
    grid-auto-flow: row;
    place-content: center;
    gap: 32px;
    margin-bottom: 32px;
  }
  .picture {
    place-content: center;
    margin: auto;
  }
  .picture :global(picture) {
    width: 158px;
    height: 158px;
    padding: 4px;
    background: #333;
    border-radius: 50%;
  }
  .profile {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
  .radar_title {
    text-align: center;
    margin: 0;
  }
  .chart-container {
    width: 300px;
    height: 250px;
    margin: 0 auto;
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
    background: linear-gradient(0deg, black, white);
    border-radius: 17px;
    width: fit-content;
    padding: 6px;
    font-size: 1rem;
  }
  .progress p {
    writing-mode: vertical-rl;
    transform: scale(-1, -1);
    margin: 0;
  }
  .progress p:nth-child(1) {
    position: absolute;
    color: black;
  }
  .progress p:nth-child(2) {
    color: white;
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
  .exprerience .icons {
    margin-left: 8px;
  }
  .works a {
    text-decoration: underline;
  }
  .symbol {
    display: none;
  }
  @media (width >= 600px) {
    .introduction > div:first-child {
      grid-auto-flow: column;
    }
  }
  @media (width >= 800px) {
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
