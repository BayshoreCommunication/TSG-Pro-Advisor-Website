import { MetadataRoute } from "next";
import GetAllPostData from "@/lib/GetPostData";
import {
  nicheTaxPracticePost,
  reduceBurnoutPost,
  yearRoundClientEngagementPost,
  transitionComplianceToAdvisoryPost,
} from "@/components/static-blogs/blogs-metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tsgproadvisor.com";

  // Static main pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-us`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Static blog posts
  const staticPosts = [
    reduceBurnoutPost,
    yearRoundClientEngagementPost,
    nicheTaxPracticePost,
    transitionComplianceToAdvisoryPost,
  ];

  const staticBlogRoutes = staticPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog posts from external backend API
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogPostData = await GetAllPostData();
    const dynamicPosts = blogPostData?.data || [];
    dynamicBlogRoutes = dynamicPosts
      .filter((post: any) => post.published)
      .map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Error fetching dynamic blogs for sitemap:", error);
  }

  return [...staticRoutes, ...staticBlogRoutes, ...dynamicBlogRoutes];
}
