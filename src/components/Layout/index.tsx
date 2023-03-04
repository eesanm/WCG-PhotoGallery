/** @format */

import classNames from 'classnames';
import Head from 'next/head';
import { PropsWithChildren, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Hamburger from './Hamburger';
import Header from './Header';
import { getMockLinks } from './LayoutHelper';
import SideBar, { SideBarProps } from './SideBar';
import { SideLinkProps } from './SideLink';

export interface ResponseLinks {
  id: string;
  slug: string;
  title: string;
}

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isSideBarHidden, setIsSideBarHidden] = useState(true);
  const [selectedId, setSelectedId] = useState('');

  //-- fetch data for side links
  const { isLoading, error, data } = useQuery<ResponseLinks[]>('topics', () =>
    fetch(
      'https://api.unsplash.com/topics/?client_id=k-BF5wOTwKPZ1m1UM1H0PzU-2OT5ngKJh1uAGy3s67I'
    ).then((res) => res.json())
  );

  const onLinkClicked = (id: string) => {
    setSelectedId(id);
    setIsSideBarHidden(true);
  };

  //map fetched data to side links props
  const sideLinkProps = useMemo((): SideLinkProps[] => {
    if (data) {
      return data.map((link) => ({
        id: link.id,
        label: link.title,
        isSelected: link.id === selectedId,
        onClick: onLinkClicked,
      }));
    }
    return getMockLinks();
  }, [data, selectedId]);

  if (isLoading) {
    return <>{'Loading...'}</>;
  }

  if (error) {
    return <>{'There is an error returning the data.'}</>;
  }

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Head>
        <title>Photo Viewer</title>
        <meta name="description" content="Photo viewer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Hamburger
          isSideBarHidden={isSideBarHidden}
          onClick={() => {
            setIsSideBarHidden(!isSideBarHidden);
          }}
        />
        <div className='ml-16 font-bold text-xl'>The Photo Explorer</div>
      </Header>
      <div className="flex h-0 grow relative">
        <SideBar sideLinks={sideLinkProps}></SideBar>
        <main
          className={classNames(
            'grow absolute top-0 bg-white w-full h-full transition-[left] duration-200 ease-out',
            { 'left-72': !isSideBarHidden },
            { 'left-0': isSideBarHidden }
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
