import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { customAlphabet } from "nanoid";
import { client } from "./client";

function Contact() {
  const ref: any = useRef();
  const [contactData, setContactData] = useState([]);
  const nanoid = customAlphabet("1234567890abcdef", 12);

  const handleFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        jsonData.map((data: any) => {
          let contactModifiedData: any = {};
          contactModifiedData.title = data?.title;
          contactModifiedData.phone = data?.phonemobiles?.split("|");
          contactModifiedData.email = data?.email?.split("|");
          setContactData((prevData) => [...prevData, contactModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(contactData);

  const updateContacts = (data, contactData) => {
    let { email, phone } = data;
    const newEmails = contactData.email.map((data) => {
      const filteredData = email.filter((oldData) => oldData.email == data);
      if (filteredData.length != 0) {
        return {
          email: filteredData[0].email,
          _key: filteredData[0]._key,
        };
      } else {
        return {
          email: data,
          _key: nanoid(),
        };
      }
    });
    const newPhone = contactData.phone.map((data) => {
      const filteredData = phone.filter((oldData) => oldData.mobile == data);
      if (filteredData.length != 0) {
        return {
          mobile: filteredData[0].mobile,
          _key: filteredData[0]._key,
        };
      } else {
        return {
          mobile: data,
          _key: nanoid(),
        };
      }
    });
    return {
      email: newEmails,
      phone: newPhone,
    };
  };

  const migrateExcelData = async () => {
    contactData.map(async (contact, index) => {
      await client
        .fetch(`*[_type == "contact" && title == "${contact.title}"][0]{...}`)
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            let updatedData = updateContacts(
              { email: res?.email, phone: res?.phone },
              contact,
            );
            await client
              .patch(res._id)
              .set({ email: updatedData?.email, phone: updatedData?.phone })
              .commit()
              .then((res) => {
                console.log(res?.title + " Updated!");
              })
              .catch((err) => {
                console.error(
                  "Oh no, the update failed: ",
                  res.title,
                  "Error : ",
                  err.message,
                );
              });
          } else {
            console.log("Creating...", contact?.title);
            let doc = {
              _type: "contact",
              title: contact.title,
              email: contact?.email?.map((data) => {
                return {
                  _key: nanoid(),
                  email: data,
                };
              }),
              phone: contact?.phone?.map((data) => {
                return {
                  _key: nanoid(),
                  mobile: data,
                };
              }),
            };
            await client
              .create(doc)
              .then((res) => {
                console.log("Created ", res._id);
              })
              .catch((err) => {
                console.log("failed to update");
                console.log("err ", err);
              });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setContactData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {contactData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {contactData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate excel data"
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

export default Contact;
