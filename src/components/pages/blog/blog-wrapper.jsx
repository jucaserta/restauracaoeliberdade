import { useState } from "react";
import BlogCard from "../../shared/blog-card";
import BlogPost from "../../../jsons/blogs.json";
import SectionHeader from "../../shared/section-header";

const INITIAL_VISIBLE = 4;
const LOAD_INCREMENT = 2;

export default function BlogWrapper() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + LOAD_INCREMENT);
    };

    const isMoreAvailable = visibleCount < BlogPost.length;

    const visiblePosts = BlogPost.slice(0, visibleCount);

    return (
        <section className="pb-10">
            <div className="container">
                <SectionHeader
                    subheading="Medureon Insights"
                    heading="Expert advice and health tips the latest medical updates"
                    className="pt-16 md:pt-20 text-center mx-auto"
                />

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-14">
                    {visiblePosts.map((post, i) => {
                        const isNew = i >= visibleCount - LOAD_INCREMENT;
                        const delay = isNew
                            ? i === visibleCount - 2
                                ? "400"
                                : "600"
                            : `${700 + i * 100}`;

                        return <BlogCard key={i} {...post} delay={delay} />;
                    })}
                </div>

                {/* Load More Button */}
                {isMoreAvailable && (
                    <div
                        className="flex justify-center mt-12"
                        data-aos="fade-slide-up"
                        data-aos-delay="400"
                    >
                        <button onClick={handleLoadMore} className="d2c_btn d2c_btn_primary">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
