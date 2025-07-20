import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Comments = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <h1 className="text-xl text-slate-500 mb-3">Comments</h1>
      <Form className="w-full" action="">
        <Input
          as="textarea"
          type={"text"}
          className={"w-full min-h-[150px] text-slate-500"}
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          disabled={!comment.trim()}
          type="submit"
          className="float-right my-3 cursor-pointer bg-slate-700 text-slate-100 hover:bg-slate-800 hover:text-slate-200 transition-all duration-400">
          Post
        </Button>
      </Form>
      <div className="flex w-full flex-row items-start justify-start gap-3 py-4">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]">
              Sophia Bennett
            </p>
            <p className="text-slate-600 text-sm font-normal leading-normal">
              2 days ago
            </p>
          </div>
          <p className="text-slate-600 text-sm font-normal leading-normal">
            This article is incredibly insightful! I've always been curious
            about smart cities and their potential impact on our lives. The
            examples provided are both inspiring and thought-provoking. I'm
            particularly interested in learning more about the sustainability
            aspects of these urban developments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
