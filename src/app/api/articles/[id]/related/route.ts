import Article from "@/app/models/article.model";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const articleId = params.id;
    const article = await Article.findById(articleId);
    const relatedArticles = await Article.find({
      tags: { $in: article._doc.tags },
    });

    return NextResponse.json(
      {
        message: "Article successfully retrieved",
        data: relatedArticles.map((article) => ({
          id: article._id,
          title: article._doc.title,
          content: article._doc.content,
          previewImage: article._doc.previewImage,
          isRecommended: article._doc.isRecommended,
        })),
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
