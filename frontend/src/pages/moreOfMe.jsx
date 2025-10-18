// src/pages/MoreOfMe.jsx
import React from "react";
import { Link } from "react-router-dom";

function MoreOfMe() {
  return (
    <section
      className="min-h-screen px-6 py-16 font-sans transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-4xl mx-auto text-left">
        
        {/* 🧭 Back Button */}
        <Link
          to="/"
          className="inline-block mb-8 px-5 py-2 rounded-full font-medium transition-all duration-300 hover:opacity-80"
          style={{
            backgroundColor: "var(--card-bg)",
            color: "var(--text-color)",
            border: "1px solid var(--muted-text)",
          }}
        >
          ← Back to Home
        </Link>

        <h1
          className="text-4xl font-serif mb-10"
          style={{ color: "var(--text-color)" }}
        >
          More of Me
        </h1>

        <p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--link-text)" }}
        >
          A quiet corner where I share what I write, learn, and feel — from small poems
          to passing thoughts.
        </p>

        <div className="space-y-12">
          {/* --- Poem 1: The Night We Met --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--link-text)",
            }}
          >
            <h2
              className="text-2xl font-serif mb-3"
              style={{ color: "var(--text-color)" }}
            >
              “The Night We Met”
            </h2>
            <p className="leading-relaxed mb-4 whitespace-pre-line">
              {`I still remember that night
in which...
we were walking through the land,
holding each other’s hand.
The moon shone, reflecting off the sand—
it was like pearls fallen on the land.

But still, you are the prettiest girl
who was ever made by God’s hand.

Ohh my girl,

I can still feel your fragrance,
and that night, you were just looking like
a fairy on the land.

Ohh girl...

I love you, and I love your presence,
but you loved me as a friend.
The way you smile—it heals my soul.

I still love you as I loved you before.
But every time, I was just in your friend zone.

Ohh girl,
I still remember
when we were by the river.
You asked me,
"What do you want as a lover?"
And I said, “Just your love, your smile, your time, your favour.”

Ohh my girl,
I want you...

Neither less nor more.
Girl, I still love you,
as I loved you before.`}
            </p>

            <img
              src="https://i.pinimg.com/736x/eb/86/44/eb864465a2d750ac2c0cae7339987fb6.jpg"
              alt="The Night We Met"
                className="rounded-xl mt-4 opacity-90 hover:opacity-100 transition w-full h-80 object-contain bg-[#1a1a1a]"

            />

            <p className="text-sm mt-3" style={{ color: "var(--muted-text)" }}>
              Written on Oct 18, 2025
            </p>
          </article>

          {/* --- Poem 2: Beyond the Nest --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--link-text)",
            }}
          >
            <h2
              className="text-2xl font-serif mb-3"
              style={{ color: "var(--text-color)" }}
            >
              “Beyond the Nest”
            </h2>
            <p className="leading-relaxed mb-4 whitespace-pre-line">
              {`Once I was a chick of the nest,
Afraid of flights,
Thinking the nest was my whole life,
Playing with my siblings all through the night.

Then one day a hurricane came,
And shattered my whole sight.
My dad protected us with all his might,
Holding the nest, wings and claws clenched tight.

But I could see the wildness of the wind,
Weakening him night by night.
It hurt my soul,
To see my parents getting old.

So, I made a choice; I leaped from the nest,
And now I try my very best.

Leaving them is never easy,
But I have to fly,
To see the limits of the sky.`}
            </p>

            <img
              src="https://i.pinimg.com/736x/c3/83/80/c38380136b5e8fe3e1314cafcd6c1b9c.jpg"
              alt="Beyond the Nest"
                className="rounded-xl mt-4 opacity-90 hover:opacity-100 transition w-full h-80 object-contain bg-[#1a1a1a]"

            />

            <p className="text-sm mt-3" style={{ color: "var(--muted-text)" }}>
              Written on Oct 18, 2025
            </p>
          </article>

          {/* --- Poem 3: Unseen --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--link-text)",
            }}
          >
            <h2
              className="text-2xl font-serif mb-3"
              style={{ color: "var(--text-color)" }}
            >
              “Unseen”
            </h2>
            <p className="leading-relaxed mb-4 whitespace-pre-line">
              {`When someone looks, they see only the rain,
A quiet, faded drop, lost and plain.
Just a dull reflection, with nothing to shine,
A flower forgotten, left behind.

Not a star in the sky or a spark in the night,
Just a shadow that blends, out of sight.
No warmth, no glow, no beauty to see,
Nothing that stands out in me.`}
            </p>

            <img
              src="https://i.pinimg.com/1200x/b6/48/98/b6489862b94e731b4c2f10281c09f6c9.jpg"
              alt="Unseen"
               className="rounded-xl mt-4 opacity-90 hover:opacity-100 transition w-full h-80 object-contain bg-[#1a1a1a]"

            />

            <p className="text-sm mt-3" style={{ color: "var(--muted-text)" }}>
              Written on Oct 18, 2025
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MoreOfMe;
