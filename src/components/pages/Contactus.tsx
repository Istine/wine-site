import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../layouts/Layout";

interface Props {
  name: string;
  email: string;
  message: string;
}

const Contactus: React.FC<{}> = () => {
  const [state, setState] = useState<Props>({} as Props);

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message Sent");
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="contact-us">
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum corrupti nesciunt quis consectetur similique perferendis,
            voluptatum quam pariatur molestiae animi. Dolorum possimus
            distinctio inventore optio architecto maxime deserunt earum. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum
            corrupti nesciunt quis consectetur similique perferendis, voluptatum
            quam pariatur molestiae animi. Dolorum possimus distinctio inventore
            optio architecto maxime deserunt earum.
          </p>
        </section>
        <section>
          <form>
            <h3>Contact Us</h3>
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={state.name} required />
            </div>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={state.email} required />
            </div>
            <div className="inputBox">
              <label htmlFor="message">Message</label>
              <textarea name="message" value={state.message} required />
            </div>
            <button onClick={handleClick}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Contactus;
