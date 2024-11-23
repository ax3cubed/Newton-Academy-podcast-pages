import { Episode } from "@/interfaces/episode";
import { GetServerSideProps } from "next";

interface PodcastPostProps {
  episode: Episode;
}

const PodcastPost: React.FC<PodcastPostProps> = ({ episode }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-lg p-8 space-y-6 mt-28">
      <h1 className="text-4xl font-extrabold text-white border-b border-gray-700 pb-4">
        {episode.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300">
        {episode.description}
      </p>
    </div>
  );
};

export default PodcastPost;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/episodes?id=${id}`);

    if (!response.ok) {
     
      return { notFound: true };
    }

    const episode = await response.json();

    if (!episode || !episode.id) {
      return { notFound: true };  
    }

    return {
      props: {
        episode,  
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true }; 
  }
};
