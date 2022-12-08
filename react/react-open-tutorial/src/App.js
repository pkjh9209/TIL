import './App.css';

function Header(props) {
  return(
    <header>
        <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = []

  for (let i = 0; i < props.topics.length; i++) {
    const t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  return  <nav>
            <ol>
              {lis}
            </ol>
          </nav>
  
}

function Article() {
  return(
    <article>
      <h2>welcome</h2>
      hello, web
    </article>
  )
}

function App() {
  const topics = [
    {id : 1, title: 'html', body:'html is'},
    {id : 2, title: 'css', body:'css is'},
    {id : 3, title: 'js', body:'js is'}
  ]
  return (
    <div>
        <Header title="REACT"></Header>
        <Nav topics={topics}></Nav>
        <Article></Article>
    </div>
  );
}

export default App;
