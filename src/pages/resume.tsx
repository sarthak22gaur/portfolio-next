import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { TbFileDownload } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai'


const Resume: NextPage = () => {
  return (
    <>
      <SEO title="Resume-Sarthak-Gaur" />
      <div className="flex flex-col gap-2 items-center bg-white justify-center w-screen h-screen">
        <div className='flex items-center justify-around w-full'>
          <Link href='/'>
            <div className='flex items-center justify-center gap-2 text-lg hover:text-black text-gray-700 transition-colors cursor-pointer'>
              <AiOutlineHome size={20} />
              Home
            </div>

          </Link>
          <a
            href="https://onedrive.live.com/download?cid=4F5C73061BBF11C5&resid=4F5C73061BBF11C5%215981&authkey=AExteyH8oq9BZRM&em=2"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2"
          >
            <div className="flex px-4 py-2 rounded-lg gap-4 border-2 border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-black items-center transition-colors">
              <TbFileDownload size={20} />
              Grab a copy
            </div>
          </a>
        </div>

        <main className='flex w-full h-full'>
          <iframe src="https://onedrive.live.com/embed?cid=4F5C73061BBF11C5&resid=4F5C73061BBF11C5%215981&authkey=AExteyH8oq9BZRM&em=2" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
        </main>

      </div>
    </>
  )
};

export default Resume;

