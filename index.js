import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Menu, MenuItem } from "../components/ui/menu";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [researchPosts, setResearchPosts] = useState([]);
  const [publicationPosts, setPublicationPosts] = useState([]);

  useEffect(() => {
    setResearchPosts([
      { id: 1, title: "Middle East Security Trends", year: "2024", excerpt: "An in-depth analysis of evolving security challenges in the Middle East." },
      { id: 2, title: "Artificial Intelligence in Defense", year: "2025", excerpt: "Exploring the impact of AI on military strategies and defense systems." }
    ]);
    setPublicationPosts([
      { id: 1, title: "Global Defense Review 2025", year: "2025", author: "Michael Johnson" },
      { id: 2, title: "Cybersecurity Strategies for 2024", year: "2024", author: "Sarah Lee" }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Intelligence Analysis</h1>
          <div className="flex gap-4 items-center">
            <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <Menu>
              <MenuItem>About</MenuItem>
              <MenuItem>Research</MenuItem>
              <MenuItem>Events</MenuItem>
              <MenuItem>Publications</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Login</MenuItem>
            </Menu>
          </div>
        </div>
      </header>

      <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("/hero.jpg")' }}>
        <h2 className="text-3xl md:text-5xl font-bold text-white bg-black/60 p-4 rounded">
          Strategic Insights for a Changing World
        </h2>
      </section>

      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Research</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition">
              <CardContent>
                <h4 className="font-bold text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600 mb-1">Year: {post.year}</p>
                <p className="text-sm text-gray-700">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-semibold mb-6">Latest Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publicationPosts.map((post) => (
            <Card key={post.id} className="hover:shadow">
              <CardContent>
                <h4 className="font-bold text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600">Year: {post.year}</p>
                <p className="text-sm text-gray-600 mb-2">Author: {post.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Intelligence Analysis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}