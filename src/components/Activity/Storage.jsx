import React, { useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Storage = () => {
  const [storage, setStorage] = useState({
    date: "",
    quantity: "",
    type: "",
    otherType: "",
    community: "",
    district: "",
    quality: "",
    chemical: "",
    certificate: "",
    rate: "",
    supervisor: "",
    contact: "",
    otherCert: "",
    receipt: "",
  });

  const handleStorageDate = (date) => {
    setStorage({
      ...storage,
      date: date.toISOString().split("T")[0],
    });
  };
  const handleStorageActivities = (e) => {
    const { name, value } = e.target;
    setStorage({
      ...storage,
      [name]: value,
    });
  };

  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    setStorage({
      ...storage,
      receipt: file,
    });
  };
  const onStorageActivitiesSubmit = (e) => {
    e.preventDefault();
    console.log(storage);
    setStorage({
      date: "",
      quantity: "",
      type: "",
      otherType: "",
      community: "",
      district: "",
      quality: "",
      chemical: "",
      rate: "",
      supervisor: "",
      contact: "",
      certficate: "",
      otherCert: "",
      receipt: "",
    });
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Storage</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onStorageActivitiesSubmit}
      >
        <div>
          <Label htmlFor="storage" className="font-semibold my-2">
            Date of storage
          </Label>
          <Datepicker
            id="storage"
            onSelectedDateChanged={handleStorageDate}
            value={storage.date}
            placeholder="Select the storage date"
            maxDate={new Date()}
          />
        </div>
        <div>
          <Label htmlFor="quantity" className="font-semibold my-2">
            Quantity
          </Label>
          <TextInput
            id="quantity"
            type="text"
            placeholder="Quantity"
            value={storage.quantity}
            name="quantity"
            onChange={handleStorageActivities}
          />
        </div>

        <div>
          <Label
            htmlFor="type-storage"
            value="Type of storage"
            className="my-2 font-semibold"
          />

          <Select
            id="method"
            required
            value={storage.type}
            name="type"
            onChange={handleStorageActivities}
          >
            <option>Select the type of storage</option>
            <option value="Own storage">Own storage</option>
            <option value="commercial storage">Commercial Storage</option>
            <option value="BJL storage">BJL storage</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {storage.type === "Others" && (
          <div>
            <Label htmlFor="other-storage" className="font-semibold my-2">
              Others(specify)
            </Label>
            <TextInput
              id="other-storage"
              type="text"
              name="otherType"
              placeholder="Specify the other storage"
              value={storage.otherType}
              onChange={handleStorageActivities}
            />
          </div>
        )}

        <div>
          <Label
            htmlFor="community"
            value="Community"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the name of community"
            id="community"
            name="community"
            value={storage.community}
            onChange={handleStorageActivities}
          />
        </div>
        <div>
          <Label
            htmlFor="district"
            value="District"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the district"
            id="district"
            name="district"
            value={storage.district}
            onChange={handleStorageActivities}
          />
        </div>
        <div>
          <Label
            htmlFor="quality"
            value="Quality"
            className="my-2 font-semibold"
          />
          <Select
            id="quality"
            required
            name="quality"
            onChange={handleStorageActivities}
            value={storage.quality}
          >
            <option>Select quality</option>
            <option value="Good">Good</option>
            <option value="Fairly good">Fairly good</option>
            <option value="Bad">Bad</option>
            <option value="Wet">Wet</option>
            <option value="Dry">Dry</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="chemical"
            value="Chemical name"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter chemical name"
            id="chemical"
            name="chemical"
            onChange={handleStorageActivities}
            value={storage.chemical}
          />
        </div>
        <div>
          <Label
            htmlFor="rate-apply"
            value="Rate of application(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply"
            name="rate"
            onChange={handleStorageActivities}
            value={storage.rate}
          />
        </div>

        <div>
          <Label
            htmlFor="supervisor"
            value="Supervisor"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter name of supervisor"
            id="supervisor"
            name="supervisor"
            onChange={handleStorageActivities}
            value={storage.supervisor}
          />
        </div>
        <div>
          <Label
            htmlFor="contact"
            value="Contact of the supervisor"
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            required
            placeholder="Enter name of supervisor"
            id="contact"
            name="contact"
            onChange={handleStorageActivities}
            value={storage.contact}
          />
        </div>
        <div>
          <Label
            htmlFor="cert"
            value="Certificate"
            className="my-2 font-semibold"
          />

          <Select
            id="cert"
            required
            name="certificate"
            onChange={handleStorageActivities}
            value={storage.certificate}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {storage.certificate === "Others" && (
          <div>
            <Label
              htmlFor="certificate"
              value="Other Certificate"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter the certificate of supervisor if not listed above"
              id="certificate"
              name="otherCert"
              value={storage.otherCert}
              onChange={handleStorageActivities}
            />
          </div>
        )}

        <div>
          <Label
            htmlFor="scanned"
            value="Upload scanned receipt"
            className="my-2 font-semibold"
          />
          <FileInput
            id="file"
            accept="image/*"
            name="receipt"
            onChange={handleReceiptUpload}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Storage;
