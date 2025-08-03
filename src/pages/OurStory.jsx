import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function OurStory() {
    const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="text-container">
            
        <h2>Shaping the World Through the Power of Writing</h2>
        <p>
          Everyone carries thoughts, experiences, and ideas within them—waiting
          to be shared. We’re building a space where those ideas can echo
          freely. Here, what matters isn’t how many followers you have, but how
          deeply you think.
        </p>
        <p>
          Writing isn’t just stringing words together. It’s about making a
          feeling, an experience, or a truth visible. This platform values
          content that means something. We celebrate writing that doesn’t race
          against time, but instead makes you pause and reflect.
        </p>
        <p>
          We believe that good content creates connection. A story told here can
          ease someone’s loneliness, spark a new idea, or simply make someone
          say, "I felt that too." And that kind of impact is more powerful than
          you might think. Every day, new voices join us: developers, teachers,
          musicians, people overcoming struggles, and those standing at the edge
          of a new beginning. What unites them is simple—each has something to
          say.
        </p>
        <p>
          There are no ads here, no algorithm chasing. Just your story, and the
          chance to share it with those who are ready to listen. Even if you
          don’t know exactly what to say yet, write. Because sometimes, the
          answer appears between the lines.
        </p>
        <p>Now it’s your turn to write.</p>
        <p>Because the world is ready to hear your story.</p>
        </div>

      </div>
      <div className="our-buttons">
        <button className="  p-5" onClick={() => navigate("/stories")}>Start reading </button><br />
        <button className=" p-5" onClick={() => navigate("/write")}>Start writing</button>
      </div>
      <Footer/>
    </>
  );
}
