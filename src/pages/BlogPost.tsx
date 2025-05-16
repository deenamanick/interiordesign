import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/ui/Button';
import { blogPosts, BlogPost as BlogPostType } from '../data/blogs';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} - InteriorBlend Blog`;
    }
  }, [id]);

  if (!post) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button variant="primary" icon={<ArrowLeft size={20} />}>
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="outline" icon={<ArrowLeft size={20} />}>
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                {post.author}
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;