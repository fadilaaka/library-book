import React from "react"; 


const ListdiPinjam = () => {
    return (
        <>
        <h1 style={{fontSize:40}} className="underline p-[10px]"> List Peminjaman Buku</h1>
        
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Cover Buku
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Judul Buku
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Penulis
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Tanggal Peminjaman
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Tanggal Pengembalian 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-gray-50 border-gray-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Light
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <img
                      src=""
                      className="w-48 h-auto float-right"
                    />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr>
            <tr class="border-b bg-white-50 border-gray-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Light
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ListdiPinjam