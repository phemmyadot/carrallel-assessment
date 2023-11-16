import Article from "@/app/models/article.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const articleId = params.id;
    const article = await Article.findById(articleId);

    return NextResponse.json(
      {
        message: "Article successfully retrieved",
        data: {
          id: article._id,
          title: article._doc.title,
          content: article._doc.content,
          imageUrl: article._doc.imageUrl,
          tags: article._doc.tags,
          isRecommended: article._doc.isRecommended,
        },
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
