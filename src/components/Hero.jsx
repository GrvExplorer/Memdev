function Hero() {
  const num_snippet = 0;
  const num_flashcard = 1;
  const about = "React";
  const learned = "export multiple component";

  return (
    <div className="py-10">
      <div className="max-w-9xl padding hero mx-auto">
        <h1 className="head text-3xl">
          Turn Snippets into Interactive Flashcards
        </h1>
        <hr className="my-3 h-2 bg-part" />

        <div className="flex items-center justify-between py-4">
          <p className="text">
            {num_snippet} out of {num_flashcard} converted, 1 to go{" "}
          </p>
          <button className="btn-delete">DELETE</button>
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

        <textarea
          name="snippet"
          id=""
          rows={10}
          cols={124}
          className="bg-part w-full text-text text-xl font-medium   p-6"
        />
      <p className="text py-8">
        This card is about <span className="text-imp border-b-2 border-imp pr-8 pl-1 ">{about}</span>
        and I&prime;just learned how to{" "}
        <span className="text-imp border-b-2 border-imp pr-8  pl-1 ">{learned}</span>
      </p>
      <p className="head text-2xl">Source URL: <span className="text">Wher does this information come from? &#40;optional&#41; </span></p>

<div className="flex gap-6 py-4 items-center">
  <input className="border-2 w-[80%] h-12 px-4 text-xl font-medium py-2 text-imp" type="text" name="link" id="" />
  <button className="btn-save">SAVE</button>
</div>
      </div>
    </div>
  );
}

export default Hero;
