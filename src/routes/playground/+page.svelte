<script lang="ts">
  type Person = {
    id: number;
    name: string;
  };

  const people: Person[] = [
    { id: 1, name: "Taro" },
    { id: 2, name: "Jiro" },
    { id: 3, name: "Saburo" },
    { id: 1, name: "Haro" }, // ← 上書きされる
  ];

  const grouped01 = people.reduce(
    (acc, person) => {
      acc[person.id] = person.name;
      return acc;
    },
    {} as Record<number, string>
  );

  const grouped02 = people.reduce(
    (acc, person) => {
      if (!acc[person.id]) {
        acc[person.id] = [];
      }
      acc[person.id].push(person.name);
      return acc;
    },
    {} as Record<number, string[]>
  );

  const numbers = [1, 2, 3, 4, 5];
  const result = numbers
    .filter((n) => n % 2 === 1)
    .map((n) => n * 2)
    .reduce((sum, n) => sum + n, 0);
  console.log(result);

  type User01 = {
    id: number;
    name: string;
  };

  const users01: User01[] = [
    { id: 1, name: "Taro" },
    { id: 2, name: "Karo" },
    { id: 3, name: "Saro" },
  ];

  const nameById = users01.reduce(
    (acc, user) => {
      acc[user.id] = user.name;
      return acc;
    },
    {} as Record<number, string>
  );

  console.log(nameById);

  type User02 = {
    id: number;
    name: string;
    age?: number;
  };

  const users02: User02[] = [
    { id: 1, name: "Toro" },
    { id: 2, name: "Soro", age: 22 },
  ];

  function showAge(user: User02): string {
    return user.age !== undefined ? `${user.age}才` : "不明";
  }

  const list: string[] = [];

  for (const user of users02) {
    list.push(`${user.name}：${showAge(user)}`);
  }

  console.log(list);
</script>

<svelte:head>
  <title>playground</title>
  <meta name="description" content="Playground Page." />
</svelte:head>

<div class="contain">
  <h1>PLAYGROUND</h1>
  <div class="inner">
    {#each Object.entries(grouped01) as [id, name]}
      <div>
        <p>id: {id}, name: {name}</p>
      </div>
    {/each}
    <br />
    {#each Object.entries(grouped02) as [id, items]}
      <div>
        <p>id: {id}</p>
        <ul>
          {#each items as item}
            <li>name: {item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
