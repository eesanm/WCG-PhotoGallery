/** @format */

import { SideLinkProps } from "./SideLink";

export const getMockLinks = (): SideLinkProps[] => {
  const onLinkClicked = (id: string) => {};

  return [
    {
      id: '1',
      label: 'Category 1',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '2',
      label: 'Category 2',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '3',
      label: 'Category 3',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '4',
      label: 'Category 4',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '5',
      label: 'Category 5',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '6',
      label: 'Category 6',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '7',
      label: 'Category 7',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '8',
      label: 'Category 8',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '9',
      label: 'Category 9',
      isSelected: false,
      onClick: onLinkClicked,
    },
    {
      id: '10',
      label: 'Category 10',
      isSelected: false,
      onClick: onLinkClicked,
    },
  ];
};
