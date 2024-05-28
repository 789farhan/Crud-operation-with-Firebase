"use client";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../../../../../firebase";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

export default function GetData() {
  // if we want to get certain data we use query and place condition in the where()
  // const collectionName=collection(db,'users');
  // const queryRef=query(collectionName,where('name','==','fff'))
  // const response= await getDocs(queryRef)

  const [Loadingdelete, setLoadingdelete] = useState(false);
  const [Identity, setIdentity] = useState("");

  const [Loadingupdate, setLoadingupdate] = useState(false);

  let [students, setstudents] = useState([]);
  const [updateuser, setupdateuser] = useState({});
  const fetchData = async () => {
    const collectionName = collection(db, "users");
    const response = await getDocs(collectionName);
    const array: any = [];
    response.forEach((doc: any) => {
      array.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setstudents(array);
  };

  useEffect(() => {
    fetchData();
  }, [students]);

  const DeleteUser = async (id: any) => {
    try {
      setIdentity(id);
      setLoadingdelete(true);
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
      setLoadingdelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateUser = async (id: any) => {
    try {
      setIdentity(id);
      setLoadingupdate(true);
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, { email: "fa@gmail.com" });
      setLoadingupdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-xl"> Firebase DB</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3 text-center">
                  # ID
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Email
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Password
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Update
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item: any, index: number) => {
                return (
                  <>
                    <tr className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-3 py-3  text-center">{item?.id}</td>
                      <td className="px-3 py-3  text-center">{item?.name}</td>
                      <td className="px-3 py-3  text-center">{item?.email}</td>
                      <td className="px-3 py-3  text-center">
                        {item?.password}
                      </td>
                      <td className="px-3 py-3  text-center">
                        {Loadingdelete && item.id == Identity ? (
                          <Spinner />
                        ) : (
                          <Button
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            onClick={() => {
                              DeleteUser(item.id);
                            }}
                          >
                            Delete
                          </Button>
                        )}
                      </td>
                      <td className="px-3 py-3  text-center">
                        {Loadingupdate && item.id == Identity ? (
                          <Spinner />
                        ) : (
                          <Button
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            onClick={() => {
                              UpdateUser(item.id);
                            }}
                          >
                            Update
                          </Button>
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
