import '../Post.scss';

const info = {
  name: "How Python Imports Packages",
  date: "Dec 12 2020",
  tags: ["python"]
};

export default function Post() {
  return (
    <div>
      <h3>{info.name}</h3>
      <p className="dateText">{info.date}</p> 
      <p>
        Understanding the import system in Python can be confusing at times, especially
        when you're running into unexpected import errors. In this post, we'll take a 
        look into how the import system works and discuss different ways you might
        want to import some Python code.
      </p>
    </div>
  )
}