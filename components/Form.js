import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="blue_gradient"> {type} Post</span>
      </h1>
      <p className="desc w-full flex flex-start ">
        {type} les prompts mte3ek m3a l3alem lkol ❤️🌍
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label className="font-satoshi font-semibold text-base text-gray-700">
          Your AI prompt
        </label>
        <textarea
          value={post.prompt}
          onChange={(e) => {
            setPost({ ...post, prompt: e.target.value });
          }}
          className="form_textarea"
          placeholder="Write your AI prompt here ..."
          required
        />
        <label className="font-satoshi font-semibold text-base text-gray-700">
          your Tag
        </label>
        <input
          value={post.tag}
          onChange={(e) => {
            setPost({ ...post, tag: e.target.value });
          }}
          className="form_input"
          placeholder="examples : #webdev, #product, #blockchain"
          required
        />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm hover:text-red-400">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 rounded-full bg-orange-500 text-white font-inter font-medium"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
