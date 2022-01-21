import Image from 'next/image';

const PostComment = () => {
    return (
        <>
            <div className="rounded-lg grid gap-4 pt-12 px-4 pb-4 hover:bg-white hover:shadow-comment-shadow">

                <div className="flex gap-4 flew-wrap items-center">
                    
                    <Image className="rounded-full" src="/img/hero-bg.jpg" alt="Goodness Clark" objectFit="cover" objectPosition="center" width={50} height={50}></Image>

                    <div>

                        <h4 className="header -mb-0.5">
                            Munachisom
                        </h4>

                        <p>
                            8 Jan, 2022
                        </p>

                    </div>

                </div>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nobis voluptatibus error adipisci vel commodi atque quos cumque quae. Placeat praesentium tempore ipsam neque iure deleniti quas ad fugiat repudiandae.
                    </p>
                </div>

            </div>

            <div className="rounded-lg grid gap-4 pt-12 px-4 pb-4 hover:bg-white hover:shadow-comment-shadow">

                <div className="flex flex-wrap gap-4 items-center">
                    
                    <Image className="rounded-full" src="/img/3446b5eca1dfe9723d3efe42aaab2d8c.jpg" alt="Wisdom Ojimahgfgfgfgfgfgfgf" objectFit="cover" objectPosition="center" width={50} height={50}></Image>

                    <div className="flex flex-col">

                        <h4 className="header -mb-0.5">
                            Wisdom Ojimah
                        </h4>

                        <p>
                            8 Jan, 2022
                        </p>

                    </div>

                </div>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nobis voluptatibus error adipisci vel commodi atque quos cumque quae. Placeat praesentium tempore ipsam neque iure deleniti quas ad fugiat repudiandae.
                    </p>
                </div>

            </div>

        </>
    );
}

export default PostComment;