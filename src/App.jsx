import Time from "./Time";
const App = () => {
  return (
    <div>
      <h1>Welcome to Simran's Timeline</h1>
      <br />
      <Time year={2002} event="I was born." />
      <Time year={2005} event="I went to school first time." />
      <Time
        year={2008}
        event="A sheep hit me with its horn and he pulled me into water."
      />
      <Time year={2014} event="I had my periods for first time." />
      <Time
        year={2017}
        event="Along with my friends group got beaten by sir in fron of everyone in school. It was a very experience for me."
      />
      <Time year={2017} event="I joined sports." />
      <Time
        year={2019}
        event="I won silver medal for kangra team in athletics meet at Hamirpur."
      />
      <Time
        year={2020}
        event="This year is very difficult for me beacuse I had to choose college or either sports university. But beacuse of my parents I had to go to college instead of sports university."
      />
      <Time year={2023} event="I join Sjahe Sapne" />
    </div>
  );
};

export default App;
