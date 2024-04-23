import React from "react";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "World Menstrual Hygiene Day, 2024",
            content: "Each year on May 27 the world comes together to celebrate Menstrual Hygiene Day to create awareness about menstruation, provide safe and hygienic practices to girls, and eradicate persisting taboos an....",
            author: "Sree",
            date: "March 1, 2024"
        },
        {
            id: 2,
            title: "What Are Period Pain And What To Do ?",
            content: "What are painful periods? Menstruation, or period, is normal vaginal bleeding that happens as part of a woman's monthly cycle. Many women have painful periods, also called dysmenorrhea. The pain is mo...",
            author: "Ananya Goyal",
            date: "March 5, 2024"
        },
        {
            id: 3,
            title: "Why Sanitation For Women Matters ?",
            content: "The United Nations Sustainable Development Goals are 17 initiatives to drastically improve the livelihood of people and the planet by 2030. Goal number 6 reads, “Ensure availability and sustainable ma...",
            author: "Sreetama Ghosh hazra",
            date: "March 10, 2024"
        }
    ];

    return (
        <div className="py-2 mt-[-80]">
            <h1 className="font-bold text-center text-4xl py-10">Our Blog Stories</h1>
            <div className="flex flex-wrap justify-center mb-10 mr-2">
                {blogs.map(blog => (
                    <div key={blog.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <div className="px-6 py-4  bg-amber-50">
                            <div className="font-bold text-xl mb-2">{blog.title}</div>
                            <p className="text-gray-700 text-base">{blog.content}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 bg-amber-50">
                            <div className="text-sm text-gray-600">Author: {blog.author}</div>
                            <div className="text-sm text-gray-600">Date: {blog.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
