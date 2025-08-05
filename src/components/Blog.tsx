import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    image: '/images/blogs/blog-01/image-01.jpg',
    date: 'Dec 22, 2023',
    title: 'Meet AutoManage, the best AI management tools',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    image: '/images/blogs/blog-01/image-02.jpg',
    date: 'Mar 15, 2023',
    title: 'How to earn more money as a wellness coach',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    image: '/images/blogs/blog-01/image-03.jpg',
    date: 'Jan 05, 2023',
    title: 'The no-fuss guide to upselling and cross selling',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

export default function Blog() {
  return (
    <section className="bg-white pb-12 pt-16 lg:pb-16 lg:pt-20 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20 animate-slide-up">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 w-full animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-8 overflow-hidden rounded-sm group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-block rounded-sm bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                    {post.date}
                  </span>
                  <h3>
                    <a
                      href="#"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl dark:text-white transition-colors duration-300"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 