"use client"

import { useState } from "react"
import { Instagram, MessageCircle, Linkedin, Mic, Swords, Copy, MapPin, Check } from "lucide-react"

export default function Component() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(label)
      setTimeout(() => setCopiedText(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/thomaslin9",
      color: "from-pink-500 to-rose-500",
      hoverColor: "hover:from-pink-600 hover:to-rose-600",
      qrCode: "/instagram-qr.png",
    },
    {
      name: "WeChat",
      icon: MessageCircle,
      username: "ThomasLin12",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
      qrCode: "/wechat-qr.png",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lin-thomas/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
    },
    {
      name: "Discord",
      icon: Mic,
      username: "here2stay1",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700",
    },
    {
      name: "League of Legends",
      icon: Swords,
      username: "Here2Stay#NA1",
      color: "from-amber-500 to-orange-500",
      hoverColor: "hover:from-amber-600 hover:to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Thomas's Socials
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-lg -z-10 rounded-full"></div>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 shadow-sm rounded-lg">
            <div className="flex items-center justify-center gap-2 text-blue-700">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">SF → NYC — please reach out if you're in the area!</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <div key={social.name} className="relative group">
              <div
                className="group/card relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300`}
                ></div>

                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 text-slate-700 group-hover/card:text-white transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover/card:bg-white/20 transition-colors duration-300">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold">{social.name}</span>
                    </div>
                  </a>
                ) : (
                  <div className="relative flex items-center justify-between p-4 text-slate-700 group-hover/card:text-white transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover/card:bg-white/20 transition-colors duration-300">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-semibold">{social.name}</span>
                        {social.username && <div className="text-sm opacity-75">{social.username}</div>}
                      </div>
                    </div>

                    {social.username && (
                      <button
                        onClick={() => copyToClipboard(social.username!, social.name)}
                        className="relative z-10 h-8 w-8 p-0 hover:bg-white/20 group-hover/card:text-white rounded-md transition-colors duration-200 flex items-center justify-center"
                      >
                        {copiedText === social.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* QR Code Popup */}
              {social.qrCode && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-3 bg-white shadow-xl border-2 border-slate-200 rounded-lg">
                    <div className="relative">
                      <img
                        src={social.qrCode || "/placeholder.svg"}
                        alt={`${social.name} QR Code`}
                        className="w-32 h-32 rounded-lg"
                      />
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-slate-200 rotate-45"></div>
                    </div>
                    <p className="text-xs text-slate-600 text-center mt-2 font-medium">Scan to connect</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-600 font-medium">Thanks for all the memories ❤️</p>
        </div>

        {/* Toast Notification */}
        {copiedText && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom-2 duration-300">
            <div className="px-4 py-2 bg-slate-900 text-white border-0 shadow-lg rounded-full">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Copied {copiedText}!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
