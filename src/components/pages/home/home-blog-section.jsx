import BlogCard from '../../shared/blog-card'
import React from 'react'
import BlogPost from '../../../jsons/blogs.json'

import SectionHeader from '../../shared/section-header'

export default function HomeBlogSection() {
    return (
        <>
            <section>
                <div className="container">
                    <SectionHeader
                        subheading="Latest from Medureon Insights"
                        heading="Expert advice and health tips the latest medical updates"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {BlogPost.slice(0, 2).map((post, i) => {
                            const delay = i === 0 ? "400" : "600"
                            return <BlogCard key={post.id} {...post} delay={delay} />
                        })}
                    </div>

                    <div className="text-center mt-10 md:mt-12">
                        <a href="/blog" className="d2c_btn d2c_btn_primary">
                            Explore Blog
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
