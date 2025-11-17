export default function Testimonials() {
  const testimonials = [
    {
      name: "Abhinav Sharma",
      role: "Hackathon Teammate",
      image: "https://res.cloudinary.com/dxg0mdj1r/image/upload/v1763373151/Screenshot_2025-11-17_151820_qnvks1.png",
      quote:
        "Working with Adarsh was an absolute pleasure. His leadership skills kept our team motivated and focused throughout the hackathon.",
      linkedin: "https://www.linkedin.com/in/abhinav-sharma-684992271/",
    },
    {
      name: "Jayesh Suthar",
      role: "Project Collaborator",
      image: "https://res.cloudinary.com/dxg0mdj1r/image/upload/v1763373250/Screenshot_2025-11-17_152357_zs6bzu.png",
      quote:
        "He always brings innovative ideas to the table and ensures everyone’s voice is heard. Truly a great leader and teammate.",
      linkedin: "https://www.linkedin.com/in/jayesh-suthar-07a1322b5/",
    },
    {
      name: "Mann Soni",
      role: "Developer",
      image: "https://res.cloudinary.com/dxg0mdj1r/image/upload/v1763373137/Screenshot_2025-11-17_151837_d0edil.png",
      quote:
        "Adarsh combines technical expertise with excellent communication skills. He makes problem-solving feel effortless.",
      linkedin: "https://www.linkedin.com/in/mann-soni-6a5182268/",
    },
  ];

  return (
    <section className="mt-20 max-w-4xl text-left px-4 w-full">
      <h2
        className="text-3xl font-bold mb-6"
        style={{ color: "var(--text-color)" }}
      >
        What My Teammates Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 grayscale"
              />
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-color)" }}
              >
                {t.name}
              </h3>
              <p className="text-sm mb-2" style={{ color: "var(--link-text)" }}>
                {t.role}
              </p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                View on LinkedIn
              </a>
            </div>
            <div className="relative mt-4">
              <span
                className="absolute top-0 left-0 text-5xl -z-10"
                style={{ color: "var(--quote-bg)" }}
              >
                ❝
              </span>
              <p className="italic" style={{ color: "var(--text-color)" }}>
                {t.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
