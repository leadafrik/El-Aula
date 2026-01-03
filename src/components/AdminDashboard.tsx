"use client";

import { useState } from "react";
import { siteContent } from "@/lib/siteContent";

export default function AdminDashboard() {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState(siteContent);
  const [saveStatus, setSaveStatus] = useState("");

  const handleSaveChanges = async () => {
    try {
      // In production, this would send to an API endpoint
      localStorage.setItem("siteContent", JSON.stringify(content));
      setSaveStatus("✓ Changes saved successfully!");
      setTimeout(() => setSaveStatus(""), 3000);
    } catch (error) {
      setSaveStatus("✗ Error saving changes");
    }
  };

  const updateContent = (path: string, value: string) => {
    const keys = path.split(".");
    let obj = content as any;

    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }

    obj[keys[keys.length - 1]] = value;
    setContent({ ...content });
  };

  if (!editMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setEditMode(true)}
          className="bg-brand-orange text-brand-black font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          🔧 Edit Site Content
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-brand-black">Site Content Editor</h1>
          <button
            onClick={() => setEditMode(false)}
            className="text-2xl text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Hero Section */}
        <div className="mb-8 border-l-4 border-brand-orange p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-brand-orange">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Main Title
              </label>
              <input
                type="text"
                value={content.hero.mainTitle}
                onChange={(e) => updateContent("hero.mainTitle", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Subtitle
              </label>
              <input
                type="text"
                value={content.hero.subtitle}
                onChange={(e) => updateContent("hero.subtitle", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Tagline
              </label>
              <input
                type="text"
                value={content.hero.tagline}
                onChange={(e) => updateContent("hero.tagline", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8 border-l-4 border-brand-orange p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-brand-orange">Key Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Students Impacted
              </label>
              <input
                type="text"
                value={content.stats.studentsImpacted}
                onChange={(e) => updateContent("stats.studentsImpacted", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Pass Rate
              </label>
              <input
                type="text"
                value={content.stats.passRate}
                onChange={(e) => updateContent("stats.passRate", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-8 border-l-4 border-brand-orange p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-brand-orange">Programs Title</h2>
          <input
            type="text"
            value={content.programs.title}
            onChange={(e) => updateContent("programs.title", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Resources Section */}
        <div className="mb-8 border-l-4 border-brand-orange p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-brand-orange">Resources Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Title
              </label>
              <input
                type="text"
                value={content.resources.title}
                onChange={(e) => updateContent("resources.title", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Description
              </label>
              <textarea
                value={content.resources.description}
                onChange={(e) => updateContent("resources.description", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-8 border-l-4 border-brand-orange p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-brand-orange">CTA Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Main Message
              </label>
              <input
                type="text"
                value={content.cta.title}
                onChange={(e) => updateContent("cta.title", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-1">
                Highlight Text
              </label>
              <input
                type="text"
                value={content.cta.highlight}
                onChange={(e) => updateContent("cta.highlight", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Save Section */}
        <div className="flex gap-4">
          <button
            onClick={handleSaveChanges}
            className="bg-brand-orange text-brand-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            💾 Save All Changes
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="bg-gray-400 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Close Editor
          </button>
        </div>

        {saveStatus && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg font-semibold">
            {saveStatus}
          </div>
        )}
      </div>
    </div>
  );
}
