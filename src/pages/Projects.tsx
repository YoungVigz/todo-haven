
export const Projects = () => {

  const ps = [{
    title: "test",
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"  
  }, {
    title: "todo-haven",
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "api",
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "reverse",
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "api-nappie",
    id: 5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "list-maker",
    id: 6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }, {
    title: "rust-hater",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente? Dolorem"
  }
]
  

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/5 h-3/5 bg-white">
        <header className="w-3/4 h-20 m-auto text-right mt-7 text-2xl font-bold text-black">Welcom, Vigz!</header>
        <main className="w-3/4 h-3/4 m-auto grid grid-cols-3 gap-x-10 overflow-y-scroll p-5">
          { ps.map(p => (
            <a key={p.id} href="/todos" className="text-center bg-black mb-10 p-5 rounded-xl"> <h1 className="text-xl font-bold">{p.title}</h1> <p>{p.desc}</p> </a>
          )) }
        </main>
      </div>
    </div>
  )
}
