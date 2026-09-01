import React, { useState, useEffect } from "react";

export default function LinearProcessLayout({ stages }) {
  const [activeSection, setActiveSection] = useState("");

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <div className="text-gray-700 leading-relaxed text-lg mb-4">
          {content.map((part, index) => {
            if (part.type === "bold") {
              return (
                <strong key={`content-${index}`} className="font-bold">
                  {part.text}
                </strong>
              );
            }

            if (part.type === "break") {
              return <br key={`content-${index}`} />;
            }

            if (part.type === "list") {
              return (
                <ul key={`content-${index}`} className="list-disc pl-6 my-3">
                  {part.items.map((item, itemIndex) => (
                    <li key={`list-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              );
            }

            return <React.Fragment key={`content-${index}`}>{part.text}</React.Fragment>;
          })}
        </div>
      );
    }

    return <p className="text-gray-700 leading-relaxed text-lg mb-4">{content}</p>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" },
    );

    stages?.forEach((stage) => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [stages]);

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
      {/* Interactive Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            Process Stages
          </h3>
          <ul className="space-y-3 border-l-2 border-gray-200">
            {stages.map((stage) => (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  className={`block pl-4 py-1 border-l-2 -ml-0.5 transition-colors ${
                    activeSection === stage.id
                      ? "border-blue-600 text-blue-600 font-semibold"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {stage.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Article / Step-by-Step Content */}
      <main className="grow max-w-5xl bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 space-y-16">
        {stages.map((stage) => {
          const blocks = stage.blocks ?? [
            ...(stage.content || stage.images ? [{ type: "text", content: stage.content }] : []),
            ...(stage.images ?? []).map((image) => ({ type: "image", ...image }))
          ];

          return (
            <section id={stage.id} key={stage.id} className="scroll-mt-24 mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {stage.title}
              </h2>

              {blocks.map((block, index) => {
                if (block.type === "text") {
                  return <React.Fragment key={`${stage.id}-block-${index}`}>{renderContent(block.content)}</React.Fragment>;
                }

                if (block.type === "image") {
                  const imageData =
                    typeof block === "string"
                      ? { src: block, description: "" }
                      : block;

                  return (
                    <figure key={`${stage.id}-block-${index}`} className="my-4">
                      <img
                        src={imageData.src}
                        alt={imageData.alt || `${stage.title} ${index + 1}`}
                        className="w-full rounded-lg border border-gray-200 shadow-sm"
                      />
                      {imageData.description && (
                        <figcaption className="mt-2 text-sm text-gray-600 italic">
                          {imageData.description}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </section>
          );
        })}
      </main>
    </div>
  );
}
