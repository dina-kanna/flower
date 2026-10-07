import { Link } from "react-router-dom";
import { Sprout, Leaf, ShieldCheck, Truck, HeartHandshake, ArrowRight, Smile, Award, Users, Compass, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Plant Parents", value: "10,000+" },
    { label: "Plant Varieties", value: "150+" },
    { label: "Cities Delivered", value: "50+" },
    { label: "Expert Care Guides", value: "100%" },
  ];

  const milestones = [
    { year: "2021", title: "The First Sprout", desc: "Started as a cozy greenhouse boutique with just 15 rare indoor plant species." },
    { year: "2023", title: "Nationwide Roots", desc: "Introduced specialized climate-safe eco-packaging to ship vibrant flora across 50+ cities." },
    { year: "2025", title: "The Green Hub", desc: "Launched digital plant-care clinics and community workshops for urban plant parents." },
  ];

  const teamMembers = [
    {
      name: "Kiran S",
      role: "Founder & Master Horticulturist",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Obsessed with rare aroids and creating self-sustaining jungle environments indoors."
    },
    {
      name: "Michel David",
      role: "Lead Botanist & Eco-Packaging Expert",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Dedicated to zero-waste shipping methods that protect both plants and our planet."
    },
    {
      name: "Rahul Prasath",
      role: "Plant Care & Community Lead",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      bio: "Always ready with tips to revive drooping monsteras and troubleshoot yellow leaves."
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Healthy & Sustainably Grown",
      description:
        "Every plant at TerraBloom Nursery is nurtured with eco-friendly practices to ensure it arrives at your doorstep lush, vibrant, and ready to thrive.",
    },
    {
      icon: Truck,
      title: "Safe & Secure Shipping",
      description:
        "Our specialized eco-packaging ensures your green friends stay secure, moist, and protected throughout their journey home.",
    },
    {
      icon: HeartHandshake,
      title: "Lifelong Plant Care Support",
      description:
        "We don't just sell plants; we help you keep them alive. Get expert tips, care reminders, and guidance whenever you need it.",
    },
    {
      icon: ShieldCheck,
      title: "Green Guarantee",
      description:
        "We stand by the quality of our flora. If your plant arrives damaged or struggles early on, our support team is here to make it right.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f8ef] text-green-950 overflow-x-hidden">

      <section className="relative overflow-hidden pt-32 sm:pt-36 pb-20">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-200/40 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-lime-200/30 blur-3xl pointer-events-none" />

        <div className="absolute top-32 right-[10%] opacity-10 pointer-events-none">
          <Leaf size={150} />
        </div>

        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm text-green-700 text-xs sm:text-sm font-bold mb-6">
              <Sprout size={16} />
              Rooted in Passion
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              We Bring Nature
              <span className="block text-green-600">
                Closer to Home.
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-8xl mx-auto">
              TerraBloom Nursery was born out of a simple love for greenery and a belief
              that every living space—big or small—deserves the calming, life-giving
              presence of nature.
            </p>

          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-[2rem] border border-green-100 shadow-xl shadow-green-950/5 text-center group hover:border-green-300 transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-black text-green-700 group-hover:scale-105 transition-transform">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-300 to-lime-200 rounded-[2.5rem] blur-2xl opacity-40" />
              <img
                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80"
                alt="TerraBloom Nursery"
                className="relative rounded-[2.5rem] object-cover w-full h-[400px] sm:h-[480px] shadow-2xl border border-green-100"
              />
            </div>

            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-wider">
                <Award size={13} />
                Our Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-green-950 leading-tight">
                Cultivating happiness, one leaf at a time.
              </h2>

              <p className="text-gray-600 leading-7">
                Founded with a deep passion for horticulture, TerraBloom Nursery started as a dedicated local space with a massive dream: to reconnect modern dwellers with the earth. We understand that living spaces can sometimes feel concrete and fast-paced, which is why we curate and grow plants that transform houses into serene sanctuaries.
              </p>

              <p className="text-gray-600 leading-7">
                From air-purifying indoor favorites to lush ornamental varieties and delicate succulents, our collection is hand-picked for absolute quality, vitality, and longevity.
              </p>

              <div className="pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-black shadow-lg shadow-green-700/20 hover:-translate-y-0.5 transition-all"
                >
                  Explore Plant Collection
                  <ArrowRight size={17} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 border border-green-100 shadow-xl shadow-green-950/5">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider mb-3">
                <Compass size={14} />
                Growth Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-green-950">
                How We've Blossomed
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {milestones.map((item, index) => (
                <div key={index} className="bg-green-50/50 p-6 sm:p-8 rounded-2xl border border-green-100 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-black text-green-600 block mb-2">{item.year}</span>
                    <h3 className="text-lg font-bold text-green-950 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-green-950">
              Why Choose TerraBloom Nursery?
            </h2>
            <p className="mt-3 text-gray-500 leading-7">
              We go above and beyond standard delivery to ensure your experience
              with plants is seamless and joyful.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-[2rem] border border-green-100 shadow-xl shadow-green-950/5 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-700 mb-6">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-green-950 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider mb-3">
              <Users size={14} />
              The Plant Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-green-950">
              Meet Our Green Guides
            </h2>
            <p className="mt-3 text-gray-500">
              Passionate botanists and horticulturists working daily behind the scenes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden border border-green-100 shadow-xl shadow-green-950/5 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">TerraBloom Specialist</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-950">{member.name}</h3>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wider mt-1 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-lime-100 via-green-100 to-emerald-100 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-7 shadow-lg shadow-green-950/5 border border-green-200/50">
            <div>
              <div className="flex items-center gap-2 text-green-700 font-black text-sm">
                <Smile size={18} />
                Join Our Green Family
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-green-950">
                Ready to transform your space into a green haven?
              </h2>

              <p className="mt-2 text-green-800/80">
                Browse our curated catalogue of indoor and outdoor plants today at TerraBloom Nursery.
              </p>
            </div>

            <Link
              to="/shop"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-green-950 text-white font-black hover:bg-green-800 hover:-translate-y-1 transition-all shadow-md"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;