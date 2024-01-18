import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // findMany

  // Query untuk menemukan atau mencari data lebih dari 1 user
  const users = await prisma.user.findMany();
  console.log(users);

  // Query ini berfungsi untuk mengambilkan semua data user beserta posts
  // const usersWithPosts = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // console.dir(usersWithPosts, { depth: null });

  // CREATE

  // Query ini berfungsi untuk membuat atau menambahkan 1 user beserta postsnya
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Hery",
  //       email: " hery@prisma.io",
  //       posts: {
  //         create: {
  //           title: "Hello Hery",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);
  // }

  // Query ini berfungsi untuk membuat atau menambahkan 1 user
  // const user = await prisma.user.create({
  //   data: {
  //     email: "gusher@prisma.io",
  //     name: "Gusher",
  //   },
  // });
  // console.log(user);

  //CREATE END

  //READ START

  // Query ini menggunakan identifier unique untuk mencari atau mengkonfigurasi data user
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "gusher@prisma.io",
  //   },
  // });
  // console.log(user);

  // Query ini menggunakan id untuk mencari atau mengkonfigurasi data user
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log(user);

  // Query ini berfungsi untuk mengambil semua data email yang berisi "prisma.io"
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: "prisma.io",
  //     },
  //   },
  // });
  // console.log(users);

  // Query ini berfungsi untuk mengambil semua data email yang berisi "prisma.io" beserta data postsnya yang bernilai false
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: "prisma.io",
  //     },
  //     posts: {
  //       some: {
  //         published: false,
  //       },
  //     },
  //   },
  // });
  // console.log(users);

  // Query ini menggunakan identifier unique untuk mencari atau mengkonfigurasi data user berdasarkan email dan menampilkan email dan name
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "gusher@prisma.io",
  //   },
  //   select: {
  //     email: true,
  //     name: true,
  //   },
  // });
  // console.log(user);

  //READ END

  //UPDATE START

  // Query ini berfungsi untuk mengupdate data user berdasarkan email dan yang di update adalah namenya
  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: "gusher@prisma.io",
  //   },
  //   data: {
  //     name: "Gusher ganteng banget",
  //   },
  // });
  // console.log(updateUser);

  // Query ini berfungsi untuk membuat data user lalu mencarinya untuk di update berdasarkan namenya
  // const upsertUser = await prisma.user.upsert({
  //   where: {
  //     email: "viola@prisma.io",
  //   },
  //   update: {
  //     name: "Viola si penari balet",
  //   },
  //   create: {
  //     email: "viola@prisma.io",
  //     name: "Viola",
  //   },
  // });
  // console.log(upsertUser);

  // UPDATE END

  // DELETE START

  // Query ini berfungsi untuk menghapus data user berdasarkan emailnya
  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     email: "alice@prisma.io",
  //   },
  // });
  // console.log(deleteUser);

  // Query ini berfungsi untuk menghapus data user berdasarkan email yang mengandung huruf g (note: menghapus dengan cara memfilter data dari user yang dicari)
  // const deleteUsers = await prisma.user.deleteMany({
  //   where: {
  //     email: {
  //       contains: "g",
  //     },
  //   },
  // });
  // console.log(deleteUsers);

  //DELETE END
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
