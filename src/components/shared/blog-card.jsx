// components/BlogCard.jsx


export default function BlogCard({
    image,
    author,
    published,
    title,
    description,
    slug,
    delay = "800",
}) {
    return (
        <div
            className="group hover:cursor-pointer d2c_blog_card"
            data-aos="fade-slide-up"
            data-aos-delay={delay}
        >
            {/* Image */}
            <div className="d2c_post_image_wrapper">
                <a href={`/blog/${slug}`}>
                    <img src={image} alt={title} width={500} height={500} />
                </a>
            </div>

            {/* Card Body */}
            <div className="md:px-4 py-5 md:py-6 lg:p-7 space-y-3 md:space-y-4 text-center md:text-left">
                <div className="grid xl:grid-cols-2 text-center md:text-left">
                    <p className="text-base">
                        <strong>Author:</strong> <span>{author}</span>
                    </p>
                    <p className="xl:text-right text-base">
                        <strong>Published:</strong> <span>{published}</span>
                    </p>
                </div>

                <div>
                    <a href={`/blog/${slug}`}>
                        <h3 className="group-hover:text-darkgray">{title}</h3>
                    </a>
                </div>

                <p className="d2c_blog_description">{description}</p>

                <a
                    href={`/blog/${slug}`}
                    className="text-xl capitalize font-primary font-semibold group-hover:text-dark-green"
                >
                    read more
                </a>
            </div>
        </div>
    )
}
