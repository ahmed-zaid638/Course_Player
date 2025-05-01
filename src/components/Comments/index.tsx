import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Comment, defaultComments } from "../../data/CommentsList";

interface CommentsProps {
  initialComments?: Comment[];
  onSubmitComment?: (content: string) => void;
  className?: string;
}

export default function Comments({
  initialComments = [],
  onSubmitComment,
}: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.length > 0 ? initialComments : defaultComments
  );

  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      studentName: "You",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      content: newComment,
      avatarUrl: "https://www.gravatar.com/avatar/?d=mp",
    };

    setComments([...comments, comment]);
    setNewComment("");

    if (onSubmitComment) {
      onSubmitComment(newComment);
    }
  };

  return (
    <div className={`py-4 mt-5`} >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Comments</h2>

      <div className="space-y-6 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img
              src={comment.avatarUrl || "/placeholder.svg"}
              alt={comment.studentName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-800 text-xl">
                {comment.studentName}
              </div>
              <div className="text-md text-gray-500 mb-1">{comment.date}</div>
              <p className="text-lg text-gray-600">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full min-h-[100px] mb-4 p-2 border border-gray-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={handleSubmitComment}
          className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white py-2 px-4 rounded transition flex items-center gap-2"
        >
          Submit Review
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
