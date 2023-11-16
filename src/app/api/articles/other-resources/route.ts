import Article from "@/app/models/article.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const recommendedArticles = await Article.find({ isRecommended: false });
    return NextResponse.json(
      {
        message: "Articles successfully retrieved",
        data: recommendedArticles.map((article) => ({
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
