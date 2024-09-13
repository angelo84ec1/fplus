

interface BlogCardProps {
    cardWrapperClass?: string;
    buttonClass?: string;
    buttonText?: string;
    cardClass?: string;
    cardText?: string;
    dateClass?: string;
    cardDate?: string;
    blogIndividual?: string;
    blogImagen?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    cardWrapperClass = '',
    buttonClass = '',
    buttonText = '',
    cardClass = '',
    cardText = '',
    dateClass = '',
    cardDate = '',
    blogIndividual = '',
    blogImagen = '',
}) => {
    return (
        <a className="text-white no-underline w-full" href={`/blogs/${blogIndividual}`} style={{aspectRatio: '9/11'}}>
            <div
                style={{
                    backgroundImage: `url(${blogImagen})`,
                    boxShadow: 'inset 0 -120px 40px rgba(0, 0, 0, 0.5)',
                    backgroundSize: 'cover',
                }}
                className={`rounded-3xl overflow-hidden relative flex no-underline ${cardWrapperClass} flex-col h-full p-2`}
            >
                <div className="card-body flex flex-col items-start justify-end">
                    <div className="h-24">
                    <button
                        type="button"
                        className={`text-white ${buttonClass} bg-[#0d132f] px-1 rounded-lg mb-2`}
                    >
                        {buttonText}
                    </button>
                    <a className="no-underline" href={`/blogs/${blogIndividual}`}>
                        <div className={`card-text d-block text-white ${cardClass}`}>
                            {cardText}
                        </div>
                    </a>
                    </div>
                </div>
                <div className="card-footer">
                    <p className={`card-text ${dateClass} no-underline`}>{cardDate}</p>
                </div>
            </div>
        </a>
    );
};

export default BlogCard;