import { useEffect, useState } from "react";

function Hero() {
  const [sele_btn, setSele_btn] = useState(false)
  const [btnNotClick, setBtnNotClick] = useState(true)
  const [preSelectedText, setPreSelectedText] = useState('')
  const [giveAnswerEl, setGiveAnswerEl] = useState(false)

  const [inputValues, setInputValues] = useState({
    snippet: "",
    about: "",
    learned: "",
    link: "",
    selected_snippet: "",
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleClearFields = () => {
    setInputValues({
      snippet: "",
      about: "",
      learned: "",
      link: "",
      selected_snippet: "",
    });
  };

  const num_snippet = 0;
  const num_flashcard = 1;


  const handelSelect = () => {
    // Button appears
    const selectedText = getSelection().toString();
    if (selectedText) {
     setSele_btn(true)
     setPreSelectedText(selectedText)
    }else{
      setSele_btn(false)
    }

    // Save Selected part and value
    // navigate to next page
    // show value and ask for Selected part
    // feedback easy - after a week / medium - after 3 days / hard- next day  / set by user interval / increaseive intervals - 1, 2, 4,
    // handel missed day
  };


  useEffect(() => {
    const selectedText = getSelection().toString();
    console.log(selectedText);
  })
  
  addEventListener('click', () => {
    if (btnNotClick) {
      handelSelect()
    }else {
      setInputValues({ ...inputValues, selected_snippet: preSelectedText });
    }
  })


  return (
    <>
    {giveAnswerEl ? <>
      <textarea
      // setup UI
      // make question with ...
      // ask the answer
      // take feed back
            onChange={handleInputChange}
            onSelect={handelSelect}
            name="snippet"
            id="snippet-input"
            value={inputValues.snippet}
            rows={10}
            cols={124}
            className="w-full bg-part p-6 text-xl font-medium text-text"
          />
    </> : <form className="py-10" onSubmit={(e) => {
      if (inputValues.selected_snippet) {
        setGiveAnswerEl(true)
      }else{
        e.preventDefault()
        setGiveAnswerEl(false)
        // message of select the remembering part 
      }
    }}>
      <div className="padding hero mx-auto max-w-9xl">
        <h1 className="head text-3xl">
          Turn Snippets into Interactive Flashcards
        </h1>
        <hr className="my-3 h-2 bg-part" />

        <div className="flex items-center justify-between py-4">
          <p className="text">
            {num_snippet} out of {num_flashcard} converted, 1 to go{" "}
          </p>
          <button
            type="button"
            onClick={handleClearFields}
            className="btn-delete"
          >
            DELETE
          </button>
        </div>

        <div className="h-4 rounded-md bg-part"></div>

        <div className="my-6 flex items-center justify-between">
          <h2 className="head text-xl">
            Select What you&prime;d like to remember
          </h2>
          <select
            name="different-types-snippets"
            className="w-60 border-2 px-2 py-2"
            id="type"
          >
            <option value="Plain">Plain text</option>
            <option value="javascript">Javascript text</option>
            <option value="Plain">Plain text</option>
            <option value="javascript">Javascript text</option>
          </select>
        </div>

        <div id="selected" className="relative">
          <textarea
            onChange={handleInputChange}
            onSelect={handelSelect}
            name="snippet"
            id="snippet-input"
            value={inputValues.snippet}
            rows={10}
            cols={124}
            className="w-full bg-part p-6 text-xl font-medium text-text"
          />
          <button onClick={() => {
           setBtnNotClick(false)
          }} className={`add-button ${sele_btn ? 'flex': 'hidden'}`}>+</button>
        </div>

        <p className="text py-8">
          This card is about{" "}
          <input
            type="text"
            onChange={handleInputChange}
            name="about"
            id="about-input"
            value={inputValues.about}
            className="border-b-2 border-imp pl-2 pr-8 text-imp "
          ></input>
          and I&prime;just learned how to{" "}
          <input
            onChange={handleInputChange}
            type="text"
            name="learned"
            value={inputValues.learned}
            id="learned-input"
            className="border-b-2 border-imp pl-2 pr-8  text-imp "
          ></input>
        </p>

        <p className="head text-2xl">
          Source link:{" "}
          <span className="text">
            Where does this information come from? &#40;optional&#41;{" "}
          </span>
        </p>

        <div className="flex items-center gap-6 py-4">
          <input
            onChange={handleInputChange}
            className="h-12 w-[80%] border-2 px-4 py-2 text-xl font-medium text-imp "
            type="text"
            name="link"
            value={inputValues.link}
            id="link-input"
          />
          <button type="submit" className="btn-save">
            SAVE
          </button>
        </div>
      </div>
    </form>}
    </>
  );
}

export default Hero;
