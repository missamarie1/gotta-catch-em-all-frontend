import "./EasyTwo.css";

const EasyTwo = () => {
  return (
    <div className="EasyTwo">
      <form>
        <h2>What is it's type?</h2>
        <input type="radio" name="who" id="who" />
        <label htmlFor="who">TODO</label>
        <input type="radio" name="who" id="who" />
        <label htmlFor="who">TODO</label>
        <input type="radio" name="who" id="who" />
        <label htmlFor="who">TODO</label>
        <input type="radio" name="who" id="who" />
        <label htmlFor="who">TODO</label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EasyTwo;
