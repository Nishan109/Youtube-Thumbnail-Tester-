"use client"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState, useEffect, useRef } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  Menu,
  Download,
  Home,
  PlaySquare,
  ThumbsUp,
  Share2,
  MoreVertical,
  CheckCircle,
  TrendingUp,
  Flame,
  ArrowLeft,
  Monitor,
  Smartphone,
  Tv,
  Moon,
  Sun,
  Shuffle,
  RotateCcw,
  Search,
  X,
  Upload,
  Bell,
  ImagePlus,
  Sparkles,
  ZoomIn,
  ZoomOut,
  SunMedium,
  Contrast,
  Trash2,
  Layers,
  Wand2,
  Undo2,
  Redo2,
  Maximize2,
  Grid,
  CheckCircle2,
  Info,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import Link from "next/link"

// Sample thumbnails for demonstration
const sampleThumbnails = [
  {
    id: 1,
    title: "Pro Videographer Setup 2023 | Best Camera Gear for Content Creators",
    channel: "Camera Essentials",
    channelVerified: true,
    views: "423K views • 2 weeks ago",
    image: "/images/videographer-thumbnail.jpg",
    duration: "14:57",
    likes: "32K",
    comments: "1.2K",
    trending: true,
  },
  {
    id: 2,
    title: "I Recreated My Most Viral Video! (POLICE CALLED)",
    channel: "MrBeast",
    channelVerified: true,
    views: "18M views • 3 days ago",
    image: "/images/mrbeast-thumbnail.jpg",
    duration: "16:42",
    likes: "1.8M",
    comments: "98K",
    trending: true,
  },
  {
    id: 3,
    title: "A MINECRAFT MOVIE | Official Hindi Trailer",
    channel: "Minecraft Official",
    channelVerified: true,
    views: "5.7M views • 1 month ago",
    image: "/images/minecraft-thumbnail.jpg",
    duration: "2:15",
    likes: "450K",
    comments: "32K",
    trending: false,
  },
  {
    id: 4,
    title: "Economy vs First Class Gaming on Airplanes",
    channel: "Tech Gaming",
    channelVerified: false,
    views: "1.2M views • 5 months ago",
    image: "/images/gaming-thumbnail.jpg",
    duration: "10:28",
    likes: "87K",
    comments: "4.3K",
    trending: false,
  },
  {
    id: 5,
    title: "Last To Fall Off Cliff Wins $100,000",
    channel: "MrBeast",
    channelVerified: true,
    views: "45M views • 8 months ago",
    image: "/images/challenge-thumbnail.jpg",
    duration: "19:23",
    likes: "3.2M",
    comments: "156K",
    trending: true,
  },
  {
    id: 6,
    title: "I Survived 100 Days with Only TNT in Minecraft",
    channel: "MinecraftMaster",
    channelVerified: false,
    views: "2.7M views • 1 month ago",
    image: "/images/minecraft-tnt-thumbnail.jpg",
    duration: "22:15",
    likes: "210K",
    comments: "15K",
    trending: false,
  },
]

// Sample feed thumbnails (additional thumbnails for the YouTube feed)
const feedThumbnails = [
  {
    id: 101,
    title: "I Spent 50 Days in Antarctica's Harshest Conditions",
    channel: "Expedition Explorer",
    channelVerified: true,
    views: "4.2M views • 2 weeks ago",
    image: "/images/challenge-thumbnail.jpg",
    duration: "21:34",
    likes: "342K",
    comments: "18K",
    trending: true,
  },
  {
    id: 102,
    title: "How I Built a $10M Business in 12 Months (Full Story)",
    channel: "Startup Success",
    channelVerified: true,
    views: "1.8M views • 3 days ago",
    image: "/images/videographer-thumbnail.jpg",
    duration: "18:22",
    likes: "156K",
    comments: "7.4K",
    trending: false,
  },
  {
    id: 103,
    title: "The Most Dangerous Minecraft Mod Ever Created",
    channel: "MinecraftMaster",
    channelVerified: false,
    views: "3.5M views • 1 month ago",
    image: "/images/minecraft-tnt-thumbnail.jpg",
    duration: "15:47",
    likes: "287K",
    comments: "12K",
    trending: false,
  },
  {
    id: 104,
    title: "We Tested the World's Fastest Gaming PC ($30,000 Build)",
    channel: "Tech Gaming",
    channelVerified: true,
    views: "5.7M views • 2 months ago",
    image: "/images/gaming-thumbnail.jpg",
    duration: "24:18",
    likes: "478K",
    comments: "22K",
    trending: true,
  },
  {
    id: 105,
    title: "I Challenged 100 Kids to a $100,000 Hide and Seek Competition",
    channel: "MrBeast",
    channelVerified: true,
    views: "68M views • 5 months ago",
    image: "/images/mrbeast-thumbnail.jpg",
    duration: "20:42",
    likes: "4.2M",
    comments: "186K",
    trending: false,
  },
]

// YouTube channel suggestions
const channelSuggestions = [
  "MrBeast",
  "PewDiePie",
  "MKBHD",
  "Linus Tech Tips",
  "Veritasium",
  "Camera Essentials",
  "MinecraftMaster",
  "Tech Gaming",
]

// Fallback image for error handling
const FALLBACK_IMAGE = "/placeholder.svg?height=720&width=1280"

// YouTube categories
const youtubeCategories = [
  { name: "All", icon: <Home className="h-4 w-4" /> },
  { name: "Trending", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "Music", icon: <PlaySquare className="h-4 w-4" /> },
  { name: "Gaming", icon: <PlaySquare className="h-4 w-4" /> },
  { name: "News", icon: <PlaySquare className="h-4 w-4" /> },
  { name: "Sports", icon: <PlaySquare className="h-4 w-4" /> },
  { name: "Learning", icon: <PlaySquare className="h-4 w-4" /> },
]

export default function ThumbnailPreviewClientPage() {
  const [viewMode, setViewMode] = useState<"youtube" | "size" | "comparison">("youtube")
  const [selectedDevice, setSelectedDevice] = useState<"desktop" | "mobile" | "tv">("desktop")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentThumbnail, setCurrentThumbnail] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState("Add a title in sidebar")
  const [channelName, setChannelName] = useState("Your Channel")
  const [channelVerified, setChannelVerified] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)
  const [thumbnails, setThumbnails] = useState(sampleThumbnails)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showGrid, setShowGrid] = useState(false)
  const [editHistory, setEditHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [comparisonThumbnail, setComparisonThumbnail] = useState<string | null>(null)
  const [showTips, setShowTips] = useState(true)
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoadingFeed, setIsLoadingFeed] = useState(false)
  const [showShorts, setShowShorts] = useState(true)
  const [showSubscriptions, setShowSubscriptions] = useState(true)
  const [viewCount, setViewCount] = useState("0")
  const [likeCount, setLikeCount] = useState("0")
  const [commentCount, setCommentCount] = useState("0")
  const [publishDate, setPublishDate] = useState("Just now")
  const [youtubeLayout, setYoutubeLayout] = useState<"feed" | "watch" | "search">("feed")
  const [isFullscreen, setIsFullscreen] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Set initial thumbnail
  useEffect(() => {
    if (thumbnails.length > 0 && !currentThumbnail) {
      setCurrentThumbnail(thumbnails[0].image)
      setVideoTitle(thumbnails[0].title)
      setChannelName(thumbnails[0].channel)
      setChannelVerified(thumbnails[0].channelVerified)

      // Initialize edit history
      setEditHistory([thumbnails[0].image])
      setHistoryIndex(0)

      // Extract view count from the views string
      const viewsText = thumbnails[0].views
      const viewCountPart = viewsText.split(" ")[0]
      setViewCount(viewCountPart)

      setLikeCount(thumbnails[0].likes)
      setCommentCount(thumbnails[0].comments)
    }
  }, [thumbnails, currentThumbnail])

  // Ensure public directories exist
  useEffect(() => {
    fetch("/api/ensure-public-dirs")
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          console.warn("Warning: Could not ensure public directories exist", data)
        }
      })
      .catch((err) => console.error("Failed to ensure directories exist:", err))
  }, [])

  // Simulate upload progress
  useEffect(() => {
    if (isUploading) {
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 0
          }
          return prev + 10
        })
      }, 300)

      return () => clearInterval(interval)
    }
  }, [isUploading])

  // Handle fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Simulate loading feed
  useEffect(() => {
    if (selectedCategory !== "All" || youtubeLayout !== "feed") {
      setIsLoadingFeed(true)
      const timer = setTimeout(() => {
        setIsLoadingFeed(false)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [selectedCategory, youtubeLayout])

  const handleDeviceChange = (device: "desktop" | "mobile" | "tv") => {
    setSelectedDevice(device)
  }

  const handleImageError = (id: number | string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
    toast({
      title: "Image failed to load",
      description: "Using placeholder image instead.",
      variant: "destructive",
    })
  }

  const getImageSrc = (image: string, id: number | string) => {
    return imageErrors[id] ? FALLBACK_IMAGE : image
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Check file type
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a JPG or PNG image.",
          variant: "destructive",
        })
        return
      }

      // Check file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 2MB.",
          variant: "destructive",
        })
        return
      }

      setIsUploading(true)

      // Read the file
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          // Add new thumbnail
          const newThumbnail = {
            id: Date.now(),
            title: videoTitle,
            channel: channelName,
            channelVerified: channelVerified,
            views: "0 views • Just now",
            image: event.target.result as string,
            duration: "0:00",
            likes: "0",
            comments: "0",
            trending: false,
          }

          setThumbnails([newThumbnail, ...thumbnails])
          setCurrentThumbnail(event.target.result as string)

          // Add to history
          const newHistory = [...editHistory.slice(0, historyIndex + 1), event.target.result as string]
          setEditHistory(newHistory)
          setHistoryIndex(newHistory.length - 1)

          toast({
            title: "Thumbnail uploaded",
            description: "Your thumbnail is now ready for preview.",
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  const resetSettings = () => {
    setZoom(100)
    setBrightness(100)
    setContrast(100)
    setSaturation(100)
    setShowGrid(false)
  }

  const shuffleThumbnails = () => {
    setThumbnails([...thumbnails].sort(() => Math.random() - 0.5))
  }

  const toggleFullscreen = () => {
    if (!isFullscreen && previewRef.current) {
      if (previewRef.current.requestFullscreen) {
        previewRef.current.requestFullscreen()
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  const handleThumbnailSelect = (index: number) => {
    setSelectedThumbnailIndex(index)
    setCurrentThumbnail(thumbnails[index].image)
    setVideoTitle(thumbnails[index].title)
    setChannelName(thumbnails[index].channel)
    setChannelVerified(thumbnails[index].channelVerified)

    // Extract view count from the views string
    const viewsText = thumbnails[index].views
    const viewCountPart = viewsText.split(" ")[0]
    setViewCount(viewCountPart)

    setLikeCount(thumbnails[index].likes)
    setCommentCount(thumbnails[index].comments)

    // Add to history if it's a different thumbnail
    if (currentThumbnail !== thumbnails[index].image) {
      const newHistory = [...editHistory.slice(0, historyIndex + 1), thumbnails[index].image]
      setEditHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
  }

  const handleComparisonSelect = (index: number) => {
    setComparisonThumbnail(thumbnails[index].image)
    setViewMode("comparison")
  }

  const applyFilter = () => {
    if (!currentThumbnail) return

    // Create a canvas to apply filters
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      // Apply filters
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`
      ctx.drawImage(img, 0, 0, img.width, img.height)

      // Get the filtered image
      const filteredImage = canvas.toDataURL("image/jpeg")

      // Add to history
      const newHistory = [...editHistory.slice(0, historyIndex + 1), filteredImage]
      setEditHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)

      // Update current thumbnail
      setCurrentThumbnail(filteredImage)

      toast({
        title: "Filters applied",
        description: "Your thumbnail has been updated with the new filters.",
      })
    }
    img.src = currentThumbnail
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setCurrentThumbnail(editHistory[historyIndex - 1])
    }
  }

  const redo = () => {
    if (historyIndex < editHistory.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setCurrentThumbnail(editHistory[historyIndex + 1])
    }
  }

  const downloadThumbnail = () => {
    if (!currentThumbnail) return

    const link = document.createElement("a")
    link.href = currentThumbnail
    link.download = `${videoTitle.replace(/\s+/g, "-").toLowerCase()}-thumbnail.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Thumbnail downloaded",
      description: "Your thumbnail has been downloaded successfully.",
    })
  }

  const autoEnhance = () => {
    // Simulate auto-enhancement with optimized values
    setBrightness(110)
    setContrast(115)
    setSaturation(105)

    setTimeout(() => {
      applyFilter()

      toast({
        title: "Auto-enhanced",
        description: "Your thumbnail has been automatically enhanced for better visibility.",
      })
    }, 500)
  }

  const renderYoutubeSkeletons = () => {
    return (
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-[360px] h-[202px] rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2 mt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderMobileSkeletons = () => {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="w-full h-[180px] rounded-lg" />
            <div className="flex gap-2">
              <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderYoutubeWatchPage = () => {
    return (
      <div
        className={`rounded-lg overflow-hidden shadow-lg border transition-colors duration-300 ${
          isDarkMode ? "bg-[#0f0f0f] text-white border-gray-800" : "bg-white text-black border-gray-200"
        }`}
      >
        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          {currentThumbnail ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={currentThumbnail || FALLBACK_IMAGE}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                }}
                onError={() => handleImageError("watch-current")}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-black/60 flex items-center justify-center">
                  <div className="h-0 w-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                {thumbnails[selectedThumbnailIndex]?.duration || "0:00"}
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-white">No thumbnail uploaded</p>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h1 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>{videoTitle}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div
                className={`h-10 w-10 rounded-full flex-shrink-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
              ></div>
              <div>
                <div className="flex items-center gap-1">
                  <p className={`font-medium ${isDarkMode ? "text-white" : "text-black"}`}>{channelName}</p>
                  {channelVerified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                </div>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{viewCount} subscribers</p>
              </div>
              <Button className="ml-4 bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
            </div>
            <div className="flex items-center gap-2">
              <div className={`flex items-center rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} px-4 py-2`}>
                <ThumbsUp className="h-5 w-5 mr-2" />
                <span>{likeCount}</span>
                <div className="mx-2 h-5 w-px bg-gray-500"></div>
                <ThumbsUp className="h-5 w-5 transform rotate-180" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share
              </Button>
              <Button variant="outline" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Video Stats */}
          <div className={`p-3 rounded-lg mb-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-medium">{viewCount} views</p>
              <span>•</span>
              <p>{publishDate}</p>
              {thumbnails[selectedThumbnailIndex]?.trending && (
                <Badge variant="outline" className="ml-2 flex items-center gap-1 border-red-500">
                  <Flame className="h-3 w-3 text-red-500" />
                  <span className="text-red-500">Trending</span>
                </Badge>
              )}
            </div>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              This is a description of the video. It explains what the video is about and provides additional context
              for viewers.
            </p>
          </div>

          {/* Comments */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-medium">{commentCount} Comments</h3>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Menu className="h-4 w-4" />
                Sort by
              </Button>
            </div>

            <div className="flex gap-3 mb-6">
              <div className={`h-8 w-8 rounded-full flex-shrink-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
              <div className="flex-1">
                <Input
                  placeholder="Add a comment..."
                  className={isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}
                />
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex-shrink-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
                ></div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm">User123</p>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm mt-1">Great video! The thumbnail really caught my attention.</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>24</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5 transform rotate-180" />
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex-shrink-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
                ></div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm">ViewerXYZ</p>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-sm mt-1">I clicked because of the thumbnail. Wasn't disappointed!</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>112</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5 transform rotate-180" />
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header - Modified to remove logo and text */}
      <header className="sticky top-0 z-50 bg-[#000000] border-b border-[#333333]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-[#333333]">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            {/* Removed YouTube Thumbnail Tester logo and text */}
          </div>

          <div className="flex items-center space-x-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={downloadThumbnail}
                    disabled={!currentThumbnail}
                    className="border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download Thumbnail</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="outline" className="hidden md:flex border-[#333333] bg-transparent hover:bg-[#333333]">
              <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-medium">
                Upgrade to Pro
              </span>
            </Button>

            <Button className="bg-[#0070f3] hover:bg-[#0060df] text-white">Save & Export</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            {/* Upload Section */}
            <Card className="border-[#333333] bg-[#111111]">
              <CardHeader className="bg-gradient-to-r from-[#0070f3] to-[#0060df] pb-3">
                <CardTitle className="text-lg font-semibold">Upload Thumbnail</CardTitle>
                <CardDescription className="text-white/80">Recommended size: 1280 x 720 pixels</CardDescription>
              </CardHeader>

              <CardContent className="pt-5">
                <div
                  onClick={triggerFileUpload}
                  className="border-2 border-dashed border-[#333333] rounded-lg p-8 text-center cursor-pointer hover:border-[#0070f3] transition-colors"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-[#0070f3]/10 p-4 rounded-full">
                      <ImagePlus className="h-8 w-8 text-[#0070f3]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Drag & drop your thumbnail here</p>
                      <p className="text-sm text-gray-400 mt-1">or click to browse files</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">JPG or PNG up to 2MB</p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg, image/png"
                  className="hidden"
                  onChange={handleFileUpload}
                />

                {isUploading && (
                  <div className="mt-4">
                    <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${uploadProgress}%` }}
                        className="h-full bg-gradient-to-r from-[#0070f3] to-[#0060df]"
                      ></motion.div>
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-2">Uploading... {uploadProgress}%</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Thumbnail Settings */}
            <Card className="border-[#333333] bg-[#111111]">
              <CardHeader className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] pb-3 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold">Thumbnail Settings</CardTitle>
                  <CardDescription className="text-white/80">Customize your preview</CardDescription>
                </div>
                <div className="flex gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={undo}
                          disabled={historyIndex <= 0}
                          className="h-8 w-8 text-white hover:bg-white/10"
                        >
                          <Undo2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Undo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={redo}
                          disabled={historyIndex >= editHistory.length - 1}
                          className="h-8 w-8 text-white hover:bg-white/10"
                        >
                          <Redo2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Redo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>

              <CardContent className="pt-5 space-y-5">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">Video Title</label>
                  <Input
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    className="bg-[#222222] border-[#333333] text-white focus-visible:ring-[#0070f3]"
                    placeholder="Enter video title"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">Channel Name</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Input
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        className="bg-[#222222] border-[#333333] text-white cursor-pointer focus-visible:ring-[#0070f3]"
                        placeholder="Enter channel name"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#222222] border-[#333333] text-white">
                      <DropdownMenuLabel>Popular Channels</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-[#333333]" />
                      {channelSuggestions.map((channel, index) => (
                        <DropdownMenuItem
                          key={index}
                          onClick={() => setChannelName(channel)}
                          className="cursor-pointer hover:bg-[#333333]"
                        >
                          {channel}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="verified-channel" checked={channelVerified} onCheckedChange={setChannelVerified} />
                  <Label htmlFor="verified-channel" className="text-sm font-medium flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1.5 text-blue-500" /> Verified Channel
                  </Label>
                </div>

                {/* Zoom Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center text-white">
                      <ZoomIn className="h-4 w-4 mr-1.5" /> Zoom: {zoom}%
                    </label>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                        onClick={() => setZoom(Math.max(50, zoom - 10))}
                      >
                        <ZoomOut className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                        onClick={() => setZoom(Math.min(200, zoom + 10))}
                      >
                        <ZoomIn className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <Slider
                    value={[zoom]}
                    min={50}
                    max={200}
                    step={1}
                    onValueChange={(value) => setZoom(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Brightness Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center text-white">
                      <SunMedium className="h-4 w-4 mr-1.5" /> Brightness: {brightness}%
                    </label>
                  </div>
                  <Slider
                    value={[brightness]}
                    min={50}
                    max={150}
                    step={1}
                    onValueChange={(value) => setBrightness(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Contrast Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center text-white">
                      <Contrast className="h-4 w-4 mr-1.5" /> Contrast: {contrast}%
                    </label>
                  </div>
                  <Slider
                    value={[contrast]}
                    min={50}
                    max={150}
                    step={1}
                    onValueChange={(value) => setContrast(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Saturation Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center text-white">
                      <Layers className="h-4 w-4 mr-1.5" /> Saturation: {saturation}%
                    </label>
                  </div>
                  <Slider
                    value={[saturation]}
                    min={50}
                    max={150}
                    step={1}
                    onValueChange={(value) => setSaturation(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Grid Toggle */}
                <div className="flex items-center space-x-2">
                  <Switch id="show-grid" checked={showGrid} onCheckedChange={setShowGrid} />
                  <Label htmlFor="show-grid" className="text-sm font-medium flex items-center">
                    <Grid className="h-4 w-4 mr-1.5" /> Show Rule of Thirds Grid
                  </Label>
                </div>

                {/* Apply Filters Button */}
                <div className="flex gap-2 pt-2">
                  <Button
                    className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white"
                    onClick={applyFilter}
                    disabled={!currentThumbnail}
                  >
                    Apply Filters
                  </Button>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={autoEnhance}
                          disabled={!currentThumbnail}
                          className="border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                        >
                          <Wand2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Auto Enhance</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>

            {/* YouTube Preview Options */}
            <Card className="border-[#333333] bg-[#111111]">
              <CardHeader className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] pb-3">
                <CardTitle className="text-lg font-semibold">YouTube Preview</CardTitle>
                <CardDescription className="text-white/80">Customize how your thumbnail appears</CardDescription>
              </CardHeader>

              <CardContent className="pt-5 space-y-5">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">YouTube Layout</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={youtubeLayout === "feed" ? "default" : "outline"}
                      onClick={() => setYoutubeLayout("feed")}
                      className={
                        youtubeLayout === "feed"
                          ? "bg-[#f43f5e] hover:bg-[#e11d48] text-white"
                          : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      }
                    >
                      Feed
                    </Button>
                    <Button
                      variant={youtubeLayout === "watch" ? "default" : "outline"}
                      onClick={() => setYoutubeLayout("watch")}
                      className={
                        youtubeLayout === "watch"
                          ? "bg-[#f43f5e] hover:bg-[#e11d48] text-white"
                          : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      }
                    >
                      Watch Page
                    </Button>
                    <Button
                      variant={youtubeLayout === "search" ? "default" : "outline"}
                      onClick={() => setYoutubeLayout("search")}
                      className={
                        youtubeLayout === "search"
                          ? "bg-[#f43f5e] hover:bg-[#e11d48] text-white"
                          : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      }
                    >
                      Search
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">Video Stats</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400">Views</label>
                      <Input
                        value={viewCount}
                        onChange={(e) => setViewCount(e.target.value)}
                        className="bg-[#222222] border-[#333333] text-white mt-1 focus-visible:ring-[#0070f3]"
                        placeholder="e.g. 1.5M"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Likes</label>
                      <Input
                        value={likeCount}
                        onChange={(e) => setLikeCount(e.target.value)}
                        className="bg-[#222222] border-[#333333] text-white mt-1 focus-visible:ring-[#0070f3]"
                        placeholder="e.g. 50K"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">Additional Options</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="show-shorts" checked={showShorts} onCheckedChange={setShowShorts} />
                      <Label htmlFor="show-shorts" className="text-sm">
                        Show Shorts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="show-subscriptions"
                        checked={showSubscriptions}
                        onCheckedChange={setShowSubscriptions}
                      />
                      <Label htmlFor="show-subscriptions" className="text-sm">
                        Show Subscriptions
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnails Library */}
            <Card className="border-[#333333] bg-[#111111]">
              <CardHeader className="pb-3 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold">Thumbnails</CardTitle>
                  <CardDescription className="text-gray-400">Your uploaded thumbnails</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-[#333333]">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#222222] border-[#333333] text-white">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]" onClick={shuffleThumbnails}>
                      <Shuffle className="h-4 w-4 mr-2" /> Shuffle Thumbnails
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]" onClick={triggerFileUpload}>
                      <Upload className="h-4 w-4 mr-2" /> Upload New
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#333333]" />
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#333333] text-red-400">
                      <Trash2 className="h-4 w-4 mr-2" /> Clear All
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>

              <CardContent className="pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={triggerFileUpload}
                    className="aspect-video bg-[#222222] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#333333] transition-colors"
                  >
                    <ImagePlus className="h-8 w-8 text-gray-500" />
                  </div>

                  {thumbnails.map((thumbnail, index) => (
                    <div
                      key={thumbnail.id}
                      onClick={() => handleThumbnailSelect(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer group ${
                        selectedThumbnailIndex === index ? "ring-2 ring-[#0070f3]" : ""
                      }`}
                    >
                      <img
                        src={getImageSrc(thumbnail.image, thumbnail.id) || "/placeholder.svg"}
                        alt={thumbnail.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(thumbnail.id)}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs border-white/20 bg-black/50 hover:bg-black/70 text-white"
                          >
                            Select
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs border-white/20 bg-black/50 hover:bg-black/70 text-white"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleComparisonSelect(index)
                            }}
                          >
                            Compare
                          </Button>
                        </div>
                      </div>
                      {selectedThumbnailIndex === index && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-[#0070f3] text-white">
                            Selected
                          </Badge>
                        </div>
                      )}
                      {thumbnail.trending && (
                        <div className="absolute top-2 left-2">
                          <Badge
                            variant="outline"
                            className="bg-black/50 border-red-500 text-white flex items-center gap-1"
                          >
                            <Flame className="h-3 w-3 text-red-500" />
                            <span className="text-red-400">Trending</span>
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                        {thumbnail.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips Section */}
            {showTips && (
              <Card className="border-[#333333] bg-[#111111]">
                <CardHeader className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] pb-3 flex flex-row justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold">Thumbnail Tips</CardTitle>
                    <CardDescription className="text-white/80">Best practices for higher CTR</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowTips(false)}
                    className="h-8 w-8 text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>

                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Use high contrast colors to make text readable</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Include faces with clear emotions to increase engagement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Keep text large and limited to 3-4 words</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Test multiple thumbnails to see which performs better</p>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-[#3b82f6] p-0 h-auto text-sm">
                        View all thumbnail best practices
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#111111] text-white border-[#333333]">
                      <DialogHeader>
                        <DialogTitle>YouTube Thumbnail Best Practices</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Follow these guidelines to maximize your click-through rate
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <h3 className="font-semibold">Technical Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                          <li>Resolution: 1280 x 720 pixels (16:9 aspect ratio)</li>
                          <li>File formats: JPG, GIF, or PNG</li>
                          <li>File size: Under 2MB</li>
                          <li>Color mode: RGB</li>
                        </ul>

                        <h3 className="font-semibold mt-4">Design Tips</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                          <li>Use high contrast colors that stand out in search results</li>
                          <li>Include close-up faces with clear emotions</li>
                          <li>Keep text large, bold, and limited to 3-4 words</li>
                          <li>Ensure text is readable on mobile devices</li>
                          <li>Use the rule of thirds for balanced composition</li>
                          <li>Create a consistent brand style across all thumbnails</li>
                          <li>Test different thumbnails to see which performs better</li>
                          <li>Avoid cluttered designs - keep it simple and focused</li>
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Preview Area */}
          <Card className="lg:col-span-2 border-[#333333] bg-[#111111] overflow-hidden" ref={previewRef}>
            <CardHeader className="pb-3 flex flex-row justify-between items-start">
              <div>
                <CardTitle className="text-lg font-semibold">Preview Your Thumbnail</CardTitle>
                <CardDescription className="text-gray-400">
                  See how your thumbnail will appear on YouTube
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleFullscreen}
                        className="h-8 w-8 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Toggle Fullscreen</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View Information</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* View Mode Tabs */}
              <div className="flex flex-col gap-4">
                <Tabs
                  defaultValue="youtube"
                  value={viewMode}
                  onValueChange={(value) => setViewMode(value as "youtube" | "size" | "comparison")}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#222222]">
                    <TabsTrigger
                      value="youtube"
                      className="data-[state=active]:bg-[#0070f3] data-[state=active]:text-white"
                    >
                      YouTube View
                    </TabsTrigger>
                    <TabsTrigger value="size">Size View</TabsTrigger>
                    <TabsTrigger value="comparison">Comparison</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={
                      selectedDevice === "desktop"
                        ? "bg-[#0070f3]/20 text-[#0070f3]"
                        : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                    }
                    onClick={() => handleDeviceChange("desktop")}
                  >
                    <Monitor className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={
                      selectedDevice === "mobile"
                        ? "bg-[#0070f3]/20 text-[#0070f3]"
                        : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                    }
                    onClick={() => handleDeviceChange("mobile")}
                  >
                    <Smartphone className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={
                      selectedDevice === "tv"
                        ? "bg-[#0070f3]/20 text-[#0070f3]"
                        : "border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                    }
                    onClick={() => handleDeviceChange("tv")}
                  >
                    <Tv className="h-5 w-5" />
                  </Button>

                  <div className="ml-auto flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                      {isDarkMode ? (
                        <>
                          <Moon className="h-4 w-4" />
                          Dark
                        </>
                      ) : (
                        <>
                          <Sun className="h-4 w-4" />
                          Light
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      onClick={shuffleThumbnails}
                    >
                      <Shuffle className="h-4 w-4" />
                      Shuffle
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-[#333333] bg-transparent hover:bg-[#333333] text-white"
                      onClick={resetSettings}
                    >
                      <RotateCcw className="h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </div>

              {/* YouTube Preview */}
              {viewMode === "youtube" && (
                <motion.div
                  key="youtube-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {youtubeLayout === "watch" ? (
                    renderYoutubeWatchPage()
                  ) : (
                    <div className="grid grid-cols-1 gap-6">
                      {/* Desktop YouTube Feed */}
                      {selectedDevice === "desktop" && (
                        <div className="space-y-4">
                          <h3 className="text-center font-medium text-gray-400 flex items-center justify-center gap-2">
                            <Monitor className="h-5 w-5 text-gray-500" /> Desktop YouTube Feed
                          </h3>
                          <div
                            className={`rounded-lg overflow-hidden shadow-lg border transition-colors duration-300 ${
                              isDarkMode
                                ? "bg-[#0f0f0f] text-white border-gray-800"
                                : "bg-white text-black border-gray-200"
                            }`}
                          >
                            {/* YouTube Header */}
                            <div
                              className={`p-2 flex items-center gap-4 border-b transition-colors duration-300 ${
                                isDarkMode ? "border-gray-800" : "border-gray-200"
                              }`}
                            >
                              <Menu className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                              <div className="flex items-center gap-1">
                                <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
                                  <div className="h-3 w-3 bg-white transform rotate-90 triangle"></div>
                                </div>
                                <span className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                                  YouTube
                                </span>
                              </div>
                              <div className="flex-1 flex items-center">
                                <div className="relative flex-1 max-w-xl mx-auto">
                                  <div
                                    className={`border rounded-full flex items-center px-4 py-2 transition-colors duration-300 ${
                                      isDarkMode ? "bg-[#121212] border-[#303030]" : "bg-gray-100 border-gray-300"
                                    }`}
                                  >
                                    <input
                                      type="text"
                                      placeholder="Search"
                                      className={`bg-transparent border-none outline-none w-full text-sm ${
                                        isDarkMode ? "text-white" : "text-black"
                                      }`}
                                      readOnly
                                    />
                                    <Search className={`h-4 w-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <Upload className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                                <Bell className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                  U
                                </div>
                              </div>
                            </div>

                            {/* Categories */}
                            <div
                              className={`px-4 py-2 overflow-x-auto flex gap-2 border-b transition-colors duration-300 ${
                                isDarkMode ? "border-gray-800" : "border-gray-200"
                              }`}
                            >
                              {youtubeCategories.map((category, index) => (
                                <Button
                                  key={index}
                                  variant={selectedCategory === category.name ? "default" : "outline"}
                                  size="sm"
                                  className={`rounded-full flex items-center gap-1 whitespace-nowrap ${
                                    selectedCategory === category.name
                                      ? "bg-gray-100 text-black hover:bg-gray-200"
                                      : isDarkMode
                                        ? "bg-gray-800 text-white hover:bg-gray-700"
                                        : "bg-white text-black hover:bg-gray-100"
                                  }`}
                                  onClick={() => setSelectedCategory(category.name)}
                                >
                                  {category.icon}
                                  <span>{category.name}</span>
                                </Button>
                              ))}
                            </div>

                            {/* Main Content */}
                            <div className="p-4">
                              {isLoadingFeed ? (
                                renderYoutubeSkeletons()
                              ) : (
                                <div className="flex flex-col space-y-6">
                                  {/* Current Thumbnail */}
                                  <div className="flex gap-4">
                                    <div className="relative w-[360px] flex-shrink-0">
                                      {currentThumbnail ? (
                                        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                                          <img
                                            src={currentThumbnail || FALLBACK_IMAGE}
                                            alt="Thumbnail preview"
                                            className="w-full h-full object-cover"
                                            style={{
                                              transform: `scale(${zoom / 100})`,
                                              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                                            }}
                                            onError={() => handleImageError("current")}
                                          />

                                          {/* Rule of thirds grid */}
                                          {showGrid && (
                                            <div className="absolute inset-0 pointer-events-none">
                                              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-black/30"></div>
                                              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/30"></div>
                                              <div className="absolute top-1/3 left-0 right-0 h-px bg-black/30"></div>
                                              <div className="absolute bottom-1/3 left-0 right-0 h-px bg-black/30"></div>
                                            </div>
                                          )}
                                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                                            {thumbnails[selectedThumbnailIndex]?.duration || "0:00"}
                                          </div>
                                        </div>
                                      ) : (
                                        <div
                                          className={`w-full aspect-video rounded-lg flex items-center justify-center transition-colors duration-300 ${
                                            isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                          }`}
                                        >
                                          <p className="text-gray-400">No thumbnail uploaded</p>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <h3
                                        className={`font-medium text-base line-clamp-2 ${
                                          isDarkMode ? "text-white" : "text-gray-900"
                                        }`}
                                      >
                                        {videoTitle}
                                      </h3>
                                      <div className="flex items-center gap-2 mt-1">
                                        <div
                                          className={`h-6 w-6 rounded-full flex-shrink-0 transition-colors duration-300 ${
                                            isDarkMode ? "bg-gray-700" : "bg-gray-300"
                                          }`}
                                        ></div>
                                        <div className="flex items-center gap-1">
                                          <p
                                            className={`text-sm transition-colors duration-300 ${
                                              isDarkMode ? "text-gray-400" : "text-gray-600"
                                            }`}
                                          >
                                            {channelName}
                                          </p>
                                          {channelVerified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                                        </div>
                                      </div>
                                      <p
                                        className={`text-sm transition-colors duration-300 ${
                                          isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}
                                      >
                                        {viewCount} views • {publishDate}
                                      </p>
                                      <div className="flex gap-2 mt-2">
                                        <div
                                          className={`text-xs px-2 py-1 rounded-full ${
                                            isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                          }`}
                                        >
                                          New
                                        </div>
                                        <div
                                          className={`text-xs px-2 py-1 rounded-full ${
                                            isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                          }`}
                                        >
                                          4K
                                        </div>
                                        {thumbnails[selectedThumbnailIndex]?.trending && (
                                          <div
                                            className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                                              isDarkMode ? "bg-red-900/30" : "bg-red-100"
                                            }`}
                                          >
                                            <Flame className="h-3 w-3 text-red-500" />
                                            <span className={isDarkMode ? "text-red-400" : "text-red-600"}>
                                              Trending
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
