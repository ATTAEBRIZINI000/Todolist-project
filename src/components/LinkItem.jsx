import { Link } from "@chakra-ui/react";

export const LinkItem = (props) => {
  const { id, name, link } = props;
  return (
    <Link
      width="240px"
      padding="8px"
      textAlign={"center"}
      color={"gray.700"}
      backgroundColor={"#A070DA"}
    >
      {name}
    </Link>
  );
};
