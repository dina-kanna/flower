import { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin,Clock3, Send, ArrowRight,Leaf, MessageCircle, Share2, Globe,MessageSquare,} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@terrabloom.com",
      description: "We'll reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 98657",
      description: "Mon - Sat, 9:00 AM - 7:00 PM",
    },
    {
      icon: MapPin,
      title: "Visit Nursery",
      value: "Salem,TamilNadu,India",
      description: "India",
    },
    {
      icon: Clock3,
      title: "Opening Hours",
      value: "09:00 AM - 07:00 PM",
      description: "Monday - Saturday",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7faf3] text-green-950">

      <section className="relative overflow-hidden pt-32 sm:pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="absolute top-32 right-[10%] opacity-10">
          <Leaf size={150} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">

          <div className="max-w-3xl mx-auto text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-green-100
                shadow-sm
                text-green-700
                text-xs
                sm:text-sm
                font-bold
                mb-6
              "
            >
              <MessageCircle size={16} />
              We'd Love To Hear From You
            </div>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                tracking-tight
                leading-[1.05]
              "
            >
              Let's Grow
              <span className="block text-green-600">
                Together.
              </span>
            </h1>

            <p
              className="
                mt-6
                text-gray-600
                text-base
                sm:text-lg
                leading-8
                max-w-2xl
                mx-auto
              "
            >
              Have a question about our plants, delivery, plant care,
              or your order? Our friendly team is here to help you
              bring more green into your life.
            </p>

          </div>
        </div>
      </section>

      <section className="pb-24">

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">

            <div>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  bg-gradient-to-br
                  from-green-950
                  via-green-900
                  to-emerald-950
                  p-7
                  sm:p-9
                  text-white
                  shadow-2xl
                "
              >


                <div
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-72
                    h-72
                    rounded-full
                    bg-green-500/20
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    w-64
                    h-64
                    rounded-full
                    bg-lime-400/10
                    blur-3xl
                  "
                />

                <div className="relative">


                  <div className="flex items-center gap-3 mb-8">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-br
                        from-green-400
                        to-emerald-600
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                    >
                      <Sprout size={25} />
                    </div>

                    <div>
                      <div className="flex items-center">

                        <span className="text-xl font-black">
                          TerraBloom 
                        </span>

                        <span className="text-xl font-black text-lime-400">
                          Nursery
                        </span>

                      </div>

                      <p className="text-[9px] text-green-300 font-bold tracking-[0.2em] uppercase">
                        Grow • Live • Bloom
                      </p>
                    </div>

                  </div>

                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      font-black
                      leading-tight
                    "
                  >
                    Have questions?
                    <span className="block text-lime-400">
                      Talk to our team.
                    </span>
                  </h2>

                  <p className="mt-4 text-green-100/70 leading-7">
                    Whether you're looking for the perfect plant,
                    need help caring for one, or want to know where
                    your order is, we're always happy to help.
                  </p>


                  <div className="mt-8 space-y-4">

                    {contactInfo.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="
                            flex
                            gap-4
                            p-4
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            hover:bg-white/10
                            transition-all
                          "
                        >

                          <div
                            className="
                              w-11
                              h-11
                              rounded-xl
                              bg-green-400/10
                              border
                              border-green-300/10
                              flex
                              items-center
                              justify-center
                              text-lime-400
                              shrink-0
                            "
                          >
                            <Icon size={20} />
                          </div>

                          <div className="min-w-0">

                            <p className="text-xs text-green-300 font-bold uppercase tracking-wider">
                              {item.title}
                            </p>

                            <p className="mt-1 font-bold text-white break-words">
                              {item.value}
                            </p>

                            <p className="text-sm text-green-100/50 mt-1">
                              {item.description}
                            </p>

                          </div>

                        </div>
                      );
                    })}

                  </div>


                  <div className="mt-8 pt-7 border-t border-white/10">

                    <p className="text-sm text-green-200/60 mb-4">
                      Follow our green journey
                    </p>

                    <div className="flex gap-3">

                      {[Share2, Globe, MessageSquare].map(
                        (Icon, index) => (
                          <button
                            key={index}
                            type="button"
                            className="
                              w-11
                              h-11
                              rounded-xl
                              bg-white/5
                              border
                              border-white/10
                              flex
                              items-center
                              justify-center
                              text-green-200
                              hover:bg-green-500
                              hover:text-white
                              hover:-translate-y-1
                              transition-all
                            "
                          >
                            <Icon size={19} />
                          </button>
                        )
                      )}

                    </div>

                  </div>

                </div>
              </div>

            </div>

            <div
              className="
                bg-white
                rounded-[2.5rem]
                border
                border-green-100
                p-6
                sm:p-8
                lg:p-10
                shadow-xl
                shadow-green-950/5
              "
            >

              <div className="mb-8">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-green-50
                    text-green-700
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                  "
                >
                  <Send size={13} />
                  Send A Message
                </span>

                <h2
                  className="
                    mt-4
                    text-3xl
                    sm:text-4xl
                    font-black
                    text-green-950
                  "
                >
                  How can we help?
                </h2>

                <p className="mt-3 text-gray-500 leading-7">
                  Fill out the form and our team will get back to
                  you as soon as possible.
                </p>

              </div>

              {submitted && (
                <div
                  className="
                    mb-6
                    p-4
                    rounded-2xl
                    bg-green-50
                    border
                    border-green-200
                    text-green-800
                    font-bold
                    text-sm
                  "
                >
                  🌱 Thank you! Your message has been received.
                  We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">


                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="
                        w-full
                        h-13
                        px-4
                        rounded-2xl
                        bg-green-50/70
                        border
                        border-green-100
                        outline-none
                        text-sm
                        text-green-950
                        placeholder:text-gray-400
                        focus:bg-white
                        focus:border-green-400
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        w-full
                        h-13
                        px-4
                        rounded-2xl
                        bg-green-50/70
                        border
                        border-green-100
                        outline-none
                        text-sm
                        text-green-950
                        placeholder:text-gray-400
                        focus:bg-white
                        focus:border-green-400
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />
                  </div>

                </div>

                {/* Phone + Subject */}

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="
                        w-full
                        h-13
                        px-4
                        rounded-2xl
                        bg-green-50/70
                        border
                        border-green-100
                        outline-none
                        text-sm
                        text-green-950
                        placeholder:text-gray-400
                        focus:bg-white
                        focus:border-green-400
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Subject
                    </label>

                    <select
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="
                        w-full
                        h-13
                        px-4
                        rounded-2xl
                        bg-green-50/70
                        border
                        border-green-100
                        outline-none
                        text-sm
                        text-green-950
                        focus:bg-white
                        focus:border-green-400
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    >
                      <option value="">Choose a topic</option>
                      <option value="Order Help">Order Help</option>
                      <option value="Plant Care">Plant Care</option>
                      <option value="Delivery">Delivery</option>
                      <option value="Product Question">
                        Product Question
                      </option>
                      <option value="Returns">Returns</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                {/* Message */}

                <div>
                  <label className="block text-sm font-bold text-green-950 mb-2">
                    Your Message
                  </label>

                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="
                      w-full
                      px-4
                      py-4
                      rounded-2xl
                      bg-green-50/70
                      border
                      border-green-100
                      outline-none
                      resize-none
                      text-sm
                      text-green-950
                      placeholder:text-gray-400
                      focus:bg-white
                      focus:border-green-400
                      focus:ring-4
                      focus:ring-green-500/10
                      transition
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-green-600
                    to-emerald-700
                    text-white
                    font-black
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-xl
                    shadow-green-700/20
                    hover:-translate-y-1
                    hover:shadow-2xl
                    transition-all
                  "
                >
                  Send Message
                  <Send size={18} />
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting this form, you agree to our
                  privacy policy and terms.
                </p>

              </form>

            </div>

          </div>
        </div>
      </section>

      <section className="pb-20">

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-gradient-to-r
              from-lime-100
              via-green-100
              to-emerald-100
              p-8
              sm:p-12
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-7
            "
          >

            <div className="relative">

              <div className="flex items-center gap-2 text-green-700 font-black text-sm">
                <Sprout size={18} />
                TerraBloomNursery
              </div>

              <h2
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-green-950
                "
              >
                Ready to bring home some green?
              </h2>

              <p className="mt-2 text-green-800/60">
                Explore our collection of healthy, happy plants.
              </p>

            </div>

            <Link
              to="/shop"
              className="
                shrink-0
                inline-flex
                items-center
                gap-2
                px-6
                py-3.5
                rounded-2xl
                bg-green-950
                text-white
                font-black
                hover:bg-green-800
                hover:-translate-y-1
                transition-all
              "
            >
              Explore Plants
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;