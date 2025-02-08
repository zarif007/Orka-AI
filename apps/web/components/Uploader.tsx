"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Upload, Link } from "lucide-react";
import { Button } from "@repo/ui/button";

const Uploader = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-lg p-6 rounded-xl shadow-lg">
        <Tabs defaultValue="url">
          <TabsList className="grid w-full grid-cols-2 bg-[#1C1C1C] rounded-lg p-1 mb-6">
            <TabsTrigger
              value="url"
              className="flex items-center justify-center text-sm py-2 text-white data-[state=active]:bg-black data-[state=active]:text-white rounded-md transition-all duration-200 ease-in-out"
            >
              <Link className="w-4 h-4 mr-2" />
              <p>URL</p>
            </TabsTrigger>
            <TabsTrigger
              value="file"
              className="flex items-center justify-center text-sm py-2 text-white data-[state=active]:bg-black data-[state=active]:text-white rounded-md transition-all duration-200 ease-in-out"
            >
              <Upload className="w-4 h-4 mr-2" />
              <p>DOC / PDF</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="url">
            <div className="space-y-3 border-2 border-[#1C1C1C] rounded-lg p-4">
              <Label htmlFor="url" className="text-white text-sm">
                Enter Website URL
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={handleUrlChange}
                className="bg-[#1C1C1C] p-2 text-white border-gray-600 h-10 text-sm rounded-lg transition-all duration-200 ease-in-out"
              />
            </div>
            <Button className="bg-white w-full text-black mt-6">Start</Button>
          </TabsContent>
          <TabsContent value="file">
            <div className="space-y-3 border-2 border-[#1C1C1C] rounded-md p-4">
              <Label htmlFor="file" className="text-white text-sm">
                Upload Doc or PDF
              </Label>
              <div
                className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-all duration-200 ease-in-out bg-[#1C1C1C] group"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                {file ? (
                  <p className="text-white text-sm">{file.name}</p>
                ) : (
                  <div>
                    <Upload className="w-10 h-10 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    <p className="text-white text-sm mt-2">
                      Click to upload or drag and drop
                      <br />
                      DOC or PDF
                    </p>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".doc,.docx,.pdf"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <Button className="bg-white w-full text-black mt-6">Start</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Uploader;
