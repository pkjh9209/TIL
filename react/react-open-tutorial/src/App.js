import './App.css';


function Article() {
  return(
    <article>
      <h2>welcome</h2>
      hello, web
    </article>
  )
}

function Header(props) {
  return(
    <header>
        <h1><a href="/" onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = []

  for (let i = 0; i < props.topics.length; i++) {
    const t = props.topics[i];
    lis.push(<li key={t.id}>
                <a id={t.id} href={'/read/'+t.id} onClick={event =>{
                  event.preventDefault();
                  props.onChangeMode(event.target.id);
                }}>{t.title}</a>
             </li>)
  }

  return  <nav>
            <ol>
              {lis}
            </ol>
          </nav>
  
}

function App() {
  const topics = [
    {id : 1, title: 'html', body:'html is'},
    {id : 2, title: 'css', body:'css is'},
    {id : 3, title: 'js', body:'js is'}
  ]
  return (
    <div>
        <Header title="REACT" onChangeMode={()=>{
          alert('head');
        }}></Header>
        <Nav topics={topics} onChangeMode={(id)=>{
          alert(id);
        }}></Nav>
        <Article></Article>
    </div>
  );
}

export default App;
