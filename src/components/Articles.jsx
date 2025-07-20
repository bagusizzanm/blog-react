import React from "react";
import Card from "./Card";

const Articles = ({
  id,
  title,
  content,
  img,
  tags,
  date,
  author,
  loading,
  link,
  className,
}) => {
  return (
    <Card
      id={id}
      title={title}
      content={content}
      img={img}
      tags={tags}
      date={date}
      author={author}
      loading={loading}
      link={link}
      className={className}
    />
  );
};

export default Articles;
