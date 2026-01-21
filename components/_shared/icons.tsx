import Image from "next/image";

export interface IconItemsProps {
  type:
    | "calendar"
    | "calculator"
    | "search"
    | "wallet"
    | "store"
    | "applications"
    | "dashboard"
    | "listings"
    | "requests"
    | "users"
    | "tasks"
    | "negative"
    | "positive"
    | "net"
    | "listing-overview"
    | "user-overview";
  size?: "sm" | "md" | "lg";
}

export default function IconItems({ type, size = "md" }: IconItemsProps) {
  const imageSize = size === "sm" ? 16 : size === "md" ? 24 : 36;

  if (type === "calendar") {
    return (
      <Image
        src="/images/navbar-images/expert-calendar.svg"
        alt="calendar"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "calculator") {
    return (
      <Image
        src="/images/navbar-images/expert-calculator.svg"
        alt="calculator"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "search") {
    return (
      <Image
        src="/images/navbar-images/expert-search.svg"
        alt="search"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "wallet") {
    return (
      <Image
        src="/images/navbar-images/exprt-payout.svg"
        alt="wallet"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "store") {
    return (
      <Image
        src="/images/navbar-images/expert-market.svg"
        alt="store"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "applications") {
    return (
      <Image
        src="/images/menu/applications.svg"
        alt="applications"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "dashboard") {
    return (
      <Image
        src="/images/menu/dashboard.svg"
        alt="dashboard"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "listings") {
    return (
      <Image
        src="/images/menu/listings.svg"
        alt="listings"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "requests") {
    return (
      <Image
        src="/images/menu/requests.svg"
        alt="requests"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "users") {
    return (
      <Image
        src="/images/menu/users.svg"
        alt="users"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "tasks") {
    return (
      <Image
        src="/images/menu/tasks.svg"
        alt="tasks"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "negative") {
    return (
      <Image
        src="/images/cards/negative.svg"
        alt="negative"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "positive") {
    return (
      <Image
        src="/images/cards/positive.svg"
        alt="positive"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "net") {
    return (
      <Image
        src="/images/cards/net.svg"
        alt="net"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "listing-overview") {
    return (
      <Image
        src="/images/cards/listing-overview.svg"
        alt="listing-overview"
        width={imageSize}
        height={imageSize}
      />
    );
  }

  if (type === "user-overview") {
    return (
      <Image
        src="/images/cards/user-overview.svg"
        alt="user-overview"
        width={imageSize}
        height={imageSize}
      />
    );
  }
}
