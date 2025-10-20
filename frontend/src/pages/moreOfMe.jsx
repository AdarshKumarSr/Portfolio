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

          {/* --- Poem 1: Curse of October --- */}
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
              “Curse of October”
            </h2>
            <p className="leading-relaxed mb-4 whitespace-pre-line">
              {`Me to October:
Why am I feeling the thickness in the air?
Oh…the October is near.

Oh October, what’s wrong with you?
Do you have some personal issues?
Do I owe you some unclear debt,
Or are you playing some kind of act?

October: What’s wrong?

Me: Whenever the season shifts to winter’s breath,
You bring a pain that weighs upon my chest.
Why are you so heartless, so fragile, so cold?
Can’t you see my smile,  the joy you stole?

October: Oh, my boy… what can I say?
You poor soul, it’s your fate’s way.
It’s nothing to do with me,
Even I feel heavy when you bleed this way.

Me: Oh sir, so I guess it’s just an unholy coincidence 
That every year, when the calendar turns to ten,
I meet this unbearable pain again and again.

October: My boy, I know it’s hard on you,
But these things are meant to make you tough too.
You’ll have to find your path, fight your battle 
You are a lone warrior; you live alone, you’ll die alone.

So raise your head, and wear your crown 
Live life king size!.`}
            </p>

            <img
              src="https://i.pinimg.com/1200x/cc/4f/eb/cc4feb2031af41e2cbb57fc06cf1af4e.jpg"
              alt="Curse of October"
              className="rounded-xl mt-4 opacity-90 hover:opacity-100 transition w-full h-80 object-contain bg-[#1a1a1a]"
            />

            <p className="text-sm mt-3" style={{ color: "var(--muted-text)" }}>
              Written on Oct 19, 2025
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
              Written on Nov 10, 2024
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
              Written on Dec 31, 2024
            </p>
          </article>

          {/* --- Poem 4: घर — बदला हुआ, मगर वही --- */}
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
              “मेरा वो घर”
            </h2>
            <p className="leading-relaxed mb-4 whitespace-pre-line font-[Noto_Serif_Devanagari]">
              {`आज जब मैं लम्बे अरसे बाद घर आया,
कुछ अलग-सा महसूस हुआ।
घर की बूढ़ी दीवारें भी नई-सी लग रही थीं,
घर में रंग लगाया गया था,  दिवाली पास है, क्यों न हो।

फिर अचानक वही पुरानी, जानी-पहचानी गाड़ी की आवाज़ आई,
पापा आ गए थे।
वो भी कुछ अलग से लगे 
वो चेहरा जिसे मैंने हमेशा एक रौब और तशन के साथ देखा था,
आज मुझे देखकर मुस्कुरा रहा था।
मैं खुश था।

उनकी वो आँखें,
जिनसे मैं कभी नज़रें नहीं मिला पाया,
आज उनमें एक अलग-सी चमक थी 
जैसे वो मुझे एक कामयाब इंसान के रूप में देखना चाहती हों।
उम्मीद से भरी वो आँखें बहुत कुछ कह रही थीं,
और मैं सब अपने मन से सुन रहा था।

फिर ऊपर वाली सीढ़ी से पायल की छम-छम की आवाज़ आई 
माँ आ रही थीं।
उनका तो क्या ही कहना,
वो तो खुशी से फूली नहीं समा रही थीं,
मानो कब से मेरे दीदार को बेचैन थीं।

पीछे मेरा भाई था 
वो छोटा-सा लड़का जो कभी मेरे कंधे तक भी नहीं आता था,
आज मुझसे ऊँचा लग रहा था।
वो भी बड़ा खुश था  क्यों न हो,
भाई साहब का नया फ़ोन जो आया था! 😄

ख़ैर...
समय है  बदलता है, बदल गया। 🩷🧿`}
            </p>

            <img
              src="https://i.pinimg.com/736x/48/70/43/487043ae8903b01ae1116e0d2364fcad.jpg"
              alt="घर बदला हुआ, मगर वही"
              className="rounded-xl mt-4 opacity-90 hover:opacity-100 transition w-full h-80 object-contain bg-[#1a1a1a]"
            />

            <p className="text-sm mt-3" style={{ color: "var(--muted-text)" }}>
              Written on Oct 20, 2025
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default MoreOfMe;
