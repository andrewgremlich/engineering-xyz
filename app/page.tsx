import Image from "next/image";

export type GravatarProfile = {
  displayName: string,
  thumbnailUrl: string,
  job_title: string,
  currentLocation: string,
  aboutMe: string,
};

export default async function Home() {
  const res = await fetch('https://gravatar.com/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.json');
  const {entry: [data]}: {entry: GravatarProfile[]} = await res.json();

  console.log(data);

	return (
		<main>
      <Image src="https://gravatar.com/avatar/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.jpg?s=400" alt="Profile picture of Andrew Gremlich" width={400} height={400}/>
			<h1>{data.displayName}</h1>
      <p>{data.job_title}</p>
      <p>{data.currentLocation}</p>
      <p>{data.aboutMe}</p>
		</main>
	);
}

// gradient background
// some fancy canvas animation, or animation of elements
// privacy policy and termos of service URL