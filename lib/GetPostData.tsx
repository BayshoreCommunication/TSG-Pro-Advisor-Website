export default async function GetAllPostData() {
  try {
    const bloData = await fetch("https://backend-tsg-pro.vercel.app/site/blog", {
      next: { revalidate: 200 },
    });

    if (!bloData.ok) {
      return { data: [] };
    }

    return bloData.json();
  } catch {
    return { data: [] };
  }
}
